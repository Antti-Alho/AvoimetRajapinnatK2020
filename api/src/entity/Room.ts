import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { IsInt } from "class-validator";
 
import { User } from "./User";

@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => User)
    @JoinTable()
    users: User[];

}