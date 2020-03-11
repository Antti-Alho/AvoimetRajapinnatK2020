import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
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

    @Column()
    hand1: string;

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