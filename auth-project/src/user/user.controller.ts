import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus , Res, UseGuards, Req} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUsrDto } from './dto/login-user.dto';
import { Response } from 'express';
import { AuthGuard } from './user.guard';
import { Request } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
      const saltOrRounds = 10;
      const hashPassword = await bcrypt.hash(createUserDto.password , saltOrRounds)
      createUserDto.password = hashPassword;
      return this.userService.create(createUserDto);
  }

  @Post('/login')
  async login( @Body() loginUsrDto: LoginUsrDto , @Res({passthrough: true}) response: Response ){
    return this.userService.login(loginUsrDto , response)
  }


  @Get('logout')
  logout( @Res({passthrough: true}) response: Response) {
    return this.userService.logout(response);
  }


  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    console.log(req.body)
    return this.userService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

}
