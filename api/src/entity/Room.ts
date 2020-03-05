import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { IsInt } from "class-validator";
 
import { User } from "./User";

@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => User, user => user.rooms)
    users: User[];

    @IsInt()
    @Column()
    playerOnePoints: number;

    @IsInt()
    @Column()
    playerTwoPoints: number;

    @IsInt()
    @Column()
    PlayerThreePoints: number;

    @IsInt()
    @Column()
    PlayerFourPoints: number;

}