import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { IsInt } from "class-validator";
 
import { User } from "./User";
import { FileLocation } from "./FileLocation"

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

    @OneToMany(type => FileLocation, file => file.room)
    @JoinTable()
    files: FileLocation[];

}