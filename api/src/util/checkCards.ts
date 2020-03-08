import * as child from 'child_process';
import conf from '../config/config';

export default async function getCards(pathToImage: String) {
    var cmd :string = ``; 
    if (conf.OS = 'LINUX') {
        cmd = `darknet detector test obj.data yolo-obj.cfg yolo-testobj_3000.weights ${pathToImage}`
    } else if (conf.OS = 'WONDOWS'){
        cmd = `darknet.exe detector test obj.data yolo-obj.cfg yolo-testobj_3000.weights ${pathToImage}`
    } else {
        console.log('Fix your .env file! OS must be LINUX or WINDOWS');
        return;
    }

    child.exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
}