import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import {Length, IsEmail, Max} from "class-validator";
import * as bcrypt from "bcryptjs";

import { Room } from './Room'
import { FileLocation } from './FileLocation'

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
    rooms: Room[];

    @OneToMany(type => FileLocation, file => file.user)
    @JoinTable()
    files: FileLocation[];

    hashPassword() {
    	this.passhash = bcrypt.hashSync(this.passhash, 8);
  	}

	checkPass(unencryptedPassword: string) {
    	return bcrypt.compareSync(unencryptedPassword, this.passhash);
    }

}
