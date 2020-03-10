import {Room} from './room'

export class User {

    public id: number = 0;

    public name: string = '';

    public passhash: string = '';

    public email: string = '';

    public rooms: Room[] = [];
}