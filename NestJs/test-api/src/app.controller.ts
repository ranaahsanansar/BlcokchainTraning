import { Controller, Get , Req , HttpCode , HttpStatus, Post, Res, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('/:id')
  // @HttpCode(HttpStatus.OK)
  @Redirect()
  // getHello( @Req() req: Request , @Res( { passthrough: true } ) res: Response ) {
    getHello( @Req() req: Request ) {
    console.log(req.params.id);
    if(req.params.id == "true"){
      return {
        url: '/redirect',
        statusCode: 200
      }
    }else if (req.params.id == 'false'){
      return {
        url: '/redirect-false',
        statusCode: 200
      }
    }
    // return this.appService.getHello(req.params.id);
  }

  @Get('/redirect')
  redirest(): string {
    return 'Working '
  }

  @Get('/redirect-false')
  redirectFalse(): string {
    return 'Working '
  }
  // Post Request to the 
  // @Post()
}