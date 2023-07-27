import { IsAlphanumeric, IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsAlphanumeric()
    user_name: string;

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    tc: boolean;
}
