import checkCards from "../util/checkCards";
import { File } from "formidable";
import { User } from "../entity/User";
import conn from "../util/databaseConn";

var Hand = require("../util/pokersolver").Hand;

class FileController {

    static upload = async (req, res) => {

        let userid = res.locals.jwtPayload.id
        let rawfiles: File[] = req.files.file as any as File[];
        if (rawfiles.length >= 2) {
            rawfiles =  req.files.file as any as File[];
        } else {
            rawfiles = [req.files.file];
        } 

        let user: User = new User();
        const userRepository = (await conn).manager.getRepository(User);
        try {
            user = await userRepository.findOne(userid);
        }catch(e){
            console.log(e);
            res.status(404).send("User not found");
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
            user.hand1 = JSON.stringify([c[0],c[1],c[2],c[3],c[4]])
            user.hand2 = JSON.stringify([c[5],c[6],c[7],c[8],c[9]])
            user.hand3 = JSON.stringify([c[10],c[11],c[12]])
            console.log(user.hand1,user.hand2,user.hand3)
            await userRepository.save(user);
            res.status(200).send("hand data saved to user");
        } catch (e){
            console.log(e)
            res.status(500).send("Internal server error!");
        }
    };

    static points = async (req ,res) => {
        
    }

}
export default FileController;