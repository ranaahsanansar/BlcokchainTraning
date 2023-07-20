import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly useRepository: Repository<User>){

  }

  async create(createUserDto: CreateUserDto) {
    let user: User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    return await this.useRepository.save(user);
  }

  async findAll() {
    return await this.useRepository.find();
  }

  async findOne(id: number) {
    return await this.useRepository.findOne({ where: {id} });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = new User();
    user.id = id ;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.age = updateUserDto.age;
    return await this.useRepository.save(user);
  }

  async remove(id: number) {
    return this.useRepository.delete(id);
  }
}
