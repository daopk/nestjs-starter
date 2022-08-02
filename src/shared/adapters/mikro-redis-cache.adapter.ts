import { CacheAdapter } from '@mikro-orm/core';
import Redis, { RedisOptions } from 'ioredis';
import { pick } from 'lodash';

export class RedisCacheAdapter implements CacheAdapter {
  private client: Redis;

  constructor(private readonly options: RedisOptions & { expiration: number }) {
    const redisOptions = pick(options, ['host', 'port', 'password', 'db', 'keyPrefix']);
    this.client = new Redis(redisOptions);
  }

  async get(name: string) {
    const json = await this.client.get(name);
    return JSON.parse(json);
  }

  async set(name: string, data: any, _origin: string, milliseconds?: number) {
    await this.client.set(name, JSON.stringify(data), 'PX', milliseconds || this.options.expiration);
  }

  async remove(name: string) {
    await this.client.del(name);
  }

  clear() {
    return new Promise<void>((resolve) => {
      const stream = this.client.scanStream({
        match: `${this.options.keyPrefix}*`,
        count: 100,
      });

      stream.on('data', (keys: string[]) => {
        this.client.del(...keys);
      });

      stream.on('end', () => {
        stream.destroy();
        resolve();
      });
    });
  }

  async close() {
    await this.client.quit();
  }
}
