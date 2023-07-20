import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    // @ApiProperty({
    //     description: 'Your First Name',
    //     default: "Ahsan",
    //   })
    firstName: string;
    // @ApiProperty()
    lastName: string;
    // @ApiProperty()
    age: number;
}