import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ email, password, confirmPassword }: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new ConflictException({
        message: 'User email already registered',
      });
    }

    if (password !== confirmPassword) {
      throw new ConflictException({
        message: 'Passwords must match',
      });
    }
  }
}
