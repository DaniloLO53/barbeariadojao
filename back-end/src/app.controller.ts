import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('clicks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put()
  async testPost() {
    return await this.appService.testPut();
  }

  @Get()
  async testGet() {
    return await this.appService.testGet();
  }
}
