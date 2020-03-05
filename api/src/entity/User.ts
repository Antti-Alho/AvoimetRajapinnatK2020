import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Length, IsEmail, Max} from "class-validator";
import * as bcrypt from "bcryptjs";

import { Room } from './Room'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Length(3,64)
    @Column()
    name: string;

    @Length(8,64)
    @Column()
    passhash: string;

    @IsEmail()
    @Column()
    email: string;

    @ManyToMany(type => Room, room => room.users)
    @JoinTable()
    rooms: Room[];

    hashPassword() {
    	this.passhash = bcrypt.hashSync(this.passhash, 8);
  	}

	checkPass(unencryptedPassword: string) {
    	return bcrypt.compareSync(unencryptedPassword, this.passhash);
    }

}
