import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {
        length: 25,
    })
    user_name: string;

    @Column({
        length: 20
    })
    first_name: string;

    @Column(  {
        length: 25
    })
    last_name: string;

    @Column({
        length: 50
    })
    email: string;

    // @Exclude()
    @Column()
    password: string;

    @Column()
    tc: boolean;
}