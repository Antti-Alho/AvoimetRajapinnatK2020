import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinColumn } from "typeorm";
import { Room } from './Room';
import { User } from './User';

@Entity()
export class FileLocation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalNuminorder: number = 0;

    @Column()
    url: string | null;

    @Column()
    originalName: string | null;

    @ManyToOne(type => Room, room => room.files)
    @JoinColumn()
    room: Room;

    @ManyToOne(type => User, user => user.files)
    @JoinColumn()
    user: User;

}