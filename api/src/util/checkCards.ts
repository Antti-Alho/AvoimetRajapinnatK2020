import conf from '../config/config';

import util = require('util');
const exec = util.promisify(require('child_process').exec);

export default async function checkCards(pathToImage: String) {
    var cmd :string = '';
    if (conf.OS = 'LINUX') {
        cmd = `~/code/clones/darknet-master/darknet detector test ~/code/clones/darknet-master/data/obj.data ~/code/clones/darknet-master/cfg/yolo-obj.cfg ~/code/clones/darknet-master/yolo-obj_3000.weights ${pathToImage}`
    } else if (conf.OS = 'WONDOWS'){
        cmd = `darknet.exe detector test obj.data yolo-obj.cfg yolo-obj_3000.weights ${pathToImage}`
    } else {
        console.log('Fix your .env file! OS must be LINUX or WINDOWS');
        return;
    }
    const { stdout } = await exec(cmd);
    return stdout;
}
