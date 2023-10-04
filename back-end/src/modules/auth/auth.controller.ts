import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/isPublic.decorator';
import { SignInDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    const data = await this.authService.signIn(signInDto);

    return { access_token: data.access_token };
  }
}
