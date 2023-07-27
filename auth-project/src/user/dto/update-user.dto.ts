import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsAlphanumeric()
    user_name: string;

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

}