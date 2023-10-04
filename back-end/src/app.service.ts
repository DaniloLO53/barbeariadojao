import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}
  async testPut() {
    return await this.prismaService.click.update({
      where: {
        id: 1,
      },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });
  }

  async testGet() {
    const test = await this.prismaService.click.findUnique({
      where: {
        id: 1,
      },
    });
    if (!test) {
      return await this.prismaService.click.create({
        data: {
          clicks: 0,
        },
      });
    }

    return test;
  }
}
