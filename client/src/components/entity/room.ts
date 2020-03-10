
import { User } from './user';



export class Room {

    public id: number = 0;

    public users: User[] = [];

    public playerOnePoints: number = 0;

    public playerTwoPoints: number = 0;

    public PlayerThreePoints: number = 0;

    public PlayerFourPoints: number = 0;
}