import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignInDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async getUserFromAuthenticationToken(token: string) {
    return this.jwtService.verify(token);
  }

  async signIn(signInDto: SignInDto): Promise<any> {
    const { password, email } = signInDto;

    const user = await this.userService.findByEmail(email);
    const passwordValidation = await bcrypt.compare(
      password,
      user?.password || '',
    );

    if (!user || !passwordValidation) {
      throw new UnauthorizedException({
        message: 'user not found',
      });
    }

    const { password: pass, updated_at, created_at, ...payload } = user;
    console.log(pass, created_at, updated_at);

    return {
      access_token: await this.jwtService.signAsync({ ...payload }),
    };
  }
}
