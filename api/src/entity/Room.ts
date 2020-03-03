import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { IsInt } from "class-validator";
 
import { User } from "./User";

@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    playerOne: User|null;

    @OneToOne(type => User)
    @JoinColumn()
    playerTwo: User|null;

    @OneToOne(type => User)
    @JoinColumn()
    playerThree: User|null;

    @OneToOne(type => User)
    @JoinColumn()
    playerFrour: User|null;

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