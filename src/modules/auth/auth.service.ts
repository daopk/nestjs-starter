import { EntityManager } from '@mikro-orm/mongodb';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '~/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly em: EntityManager, private readonly jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string> {
    let isValid = false;
    const user = await this.em.findOne(User, { username });
    if (user) {
      isValid = await compare(password, user.password);
    }
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateToken(user);
  }

  generateToken(user: User) {
    return this.jwtService.sign({
      id: user.id,
      username: user.username,
    });
  }
}
