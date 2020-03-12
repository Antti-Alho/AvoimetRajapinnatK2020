import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { IsInt } from "class-validator";
 
import { User } from "./User";

var Hand = require("../util/pokersolver").Hand;


@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => User)
    @JoinTable()
    users: User[];

    checkHands() {
        let bonus: number
        this.users.forEach(user1 => {
            this.users.forEach(user2 => {
                if (user1 !== user2) {
                    var user1hand1 = Hand.solve(JSON.parse(user1.hand1))
                    var user1hand2 = Hand.solve(JSON.parse(user1.hand2))
                    var user1hand3 = Hand.solve(JSON.parse(user1.hand3))
                    var user2hand1 = Hand.solve(JSON.parse(user2.hand1))
                    var user2hand2 = Hand.solve(JSON.parse(user2.hand2))
                    var user2hand3 = Hand.solve(JSON.parse(user2.hand3))
                    var winner1 = Hand.winners([user1hand1,user2hand1])
                    var winner2 = Hand.winners([user1hand2,user2hand2])
                    var winner3 = Hand.winners([user1hand3,user2hand3])
                    if(winner1 === user1hand1) {
                        user1.points++;
                        user2.points--;
                    } else {
                        user1.points--;
                        user2.points++;
                    }
                    if(winner2 === user1hand2) {
                        user1.points++;
                        user2.points--;
                    } else {
                        user1.points--;
                        user2.points++;
                    }
                    if(winner3 === user1hand3) {
                        user1.points++;
                        user2.points--;
                    } else {
                        user1.points--;
                        user2.points++;
                    }
                }
            });
        });
    }

}