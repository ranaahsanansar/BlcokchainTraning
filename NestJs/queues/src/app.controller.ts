import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send')
  async sendMessage(@Query('msg') msg: string) {
    try {
      await this.appService.sendMessage(msg);
      return msg;
    } catch (err) {
      console.log("Error")
      return err;
    }
  }
}