import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/isPublic.decorator';
import { SignUpDto } from './user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.userService.signUp(signUpDto);
  }
}
