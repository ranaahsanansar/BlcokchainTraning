import { BadRequestException, Dependencies, HttpException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUsrDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

  async create(createUserDto: CreateUserDto) {


    let getEmail = await this.usersRepository.findOne({where: {email: createUserDto.email} });

    console.log(getEmail)

    if(getEmail == null) {

      return await this.usersRepository.save(createUserDto)

    }else{
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        message: 'Email Allready Exists',
      }, HttpStatus.NOT_FOUND, {
      });
    }

    
  }

  async login(loginUsrDto: LoginUsrDto , response: Response) {
    try {
      var user = await this.usersRepository.findOne({ where: { email: loginUsrDto.email } })
    } catch (error) {
      console.log(error)
      throw new BadRequestException("Internal Server Error")
    }

    if (!user) {
      throw new BadRequestException("Invalid Email Address")
    }

    if (!await bcrypt.compare(loginUsrDto.password, user.password)) {
      throw new UnauthorizedException( { message: "Invalid Password" , status: 'error'});
    }

    try {
      const payload = { useremail: user.email, id: user.id };
      console.log(payload)
      const token = await this.jwtService.signAsync(payload);
      response.cookie('jwt' , token , {httpOnly: true});

      return {
        status : "success",
        message: "Login successful",
        token: token
      }

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException("Internal server error")
    }
  }

  async findOne(id: number) {
    let user = await this.usersRepository.findOne({ where: { id } });

    // Removing password from user object 
    const { password , ...result} = user ;

    if (user == null) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        message: 'User not found',
      }, HttpStatus.NOT_FOUND, {
      });
    }
    return result;
  }

  logout(response: Response) {
    response.clearCookie('jwt')
    return {
      status: "success",
      message: "Successfully logged out"
    };
  }
}