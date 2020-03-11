import { Request, Response } from "express";
import checkCards from "../util/checkCards";
import { File } from "formidable";
import { getRepository } from "typeorm";
import { Room } from "../entity/Room";

var Hand = require("../util/pokersolver").Hand;

class FileController {

    static upload = async (req, res) => {

        let userid = res.locals.userId
        let rawfiles: File[] = req.files.file as any as File[];
        if (rawfiles.length >= 2) {
            rawfiles =  req.files.file as any as File[];
        } else {
            rawfiles = [req.files.file];
        } 

        console.log(rawfiles[0].path)
        try {
            var string = await checkCards(rawfiles[0].path)
            console.log(string)
            var rows = string.split('\n')
            var c = []
            for (let i = 5; i < rows.length - 1; i++) {
                var array = rows[i].split(':');
                c[i-5] = array[0].replace("10","T")              
            }
            c = Array.from(new Set(c))
            var rawHand1 = [c[0],c[1],c[2],c[3],c[4]]
            var rawHand2 = [c[5],c[6],c[7],c[8],c[9]]
            var rawHand3 = [c[10],c[11],c[12]]
            console.log(rawHand1,rawHand2,rawHand3)

            var hand1 = Hand.solve(rawHand1)
            var hand2 = Hand.solve(rawHand2)
            var hand3 = Hand.solve(rawHand3)
            console.log(rawHand1 , hand1.descr, rawHand2 , hand2.descr, rawHand3 , hand3.descr)
            console.log("Voittaja "+Hand.winners([hand1, hand2]))
            res.status(200).send();
        } catch (e){
            console.log(e)
            res.status(500).send("Internal server error!");
        }
        /* 
        let userid = res.locals.userId
        let rawfiles: File[] = req.files.file as any as File[];
        if (rawfiles.length >= 2) {
            rawfiles =  req.files.file as any as File[];
        } else {
            rawfiles = [req.files.file];
        } 
        */
    };

}
export default FileController;