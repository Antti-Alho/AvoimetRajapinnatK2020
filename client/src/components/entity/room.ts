import { User } from './user';

export class Room {
    public id: number|null = null;
    public users: User[] = [];
}
