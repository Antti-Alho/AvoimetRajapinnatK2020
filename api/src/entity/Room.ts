import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    playerOne: User|null;

    @Column()
    playerTwo: User;

    @Column()
    playerThree: User;

    @Column()
    playerFrour: User;

}