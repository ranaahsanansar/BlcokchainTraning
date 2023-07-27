import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginUsrDto extends PartialType(CreateUserDto) {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}