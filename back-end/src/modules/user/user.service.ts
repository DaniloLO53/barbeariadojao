import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { SignUpDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async signUp(signUpDto: SignUpDto): Promise<User | never> {
    const { password, confirmPassword, email } = signUpDto;
    const user = await this.findByEmail(email);

    if (user) {
      throw new ConflictException({
        message: 'user already registered',
      });
    }
    if (password !== confirmPassword) {
      throw new BadRequestException({
        message: 'Passwords must match',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
        created_at: new Date(),
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
