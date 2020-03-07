import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import { FileLocation } from "../entity/FileLocation";
import { Room } from "../entity/Room";

class FileController {

    static ListAllByRoomId = async (req: Request, res: Response) => {
        const id = req.params.id;
        const orderRepository = getRepository(FileLocation);
        console.log(id);
        let fileLocations: FileLocation[] = [];
        try {
            fileLocations = await orderRepository.find({ where: { order: id}});
        } catch (error) {
            res.status(404).send("no files found for this order");
            return;
        }
        console.log(fileLocations);
        res.status(200).send(fileLocations);
    };

    static download = async (req: Request, res: Response) => {
        const id = req.params.id;
        const orderRepository = getRepository(FileLocation);
        let fileLocation: FileLocation;

        try {
            fileLocation = await orderRepository.findOneOrFail( {id: id} );
        } catch (error) {
            res.status(404).send("no files found for this order");
            return;
        }
        console.log(fileLocation);
        let pieces: string[] = fileLocation.url.split('/');
        fileLocation.url = pieces[pieces.length-2] + '/' + pieces[pieces.length-1];
        console.log(fileLocation.url);
        res.status(200).send(fileLocation);
    };

    static upload = async (req: Request, res: Response) => {

        let orderid = JSON.parse(req.fields.id as string);
        let originalNums = JSON.parse(req.fields.originalNums as string);

        // req.files.file is array if there are multiple files.
        // but its a file if there is only one file.
        let rawfiles: File[] = req.files.file as any as File[];
        if (rawfiles.length >= 2) {
            rawfiles =  req.files.file as any as File[];
        } else {
            rawfiles = [req.files.file];
        }
        const fileRepository = getRepository(FileLocation);
        let order: Room = new Room();
        let newFiles: FileLocation[] = [];
        
        for (let i = 0; i < rawfiles.length; i++) {
            const fileloc = new FileLocation();
            fileloc.originalNuminorder = originalNums[i] as number;
            fileloc.originalName = rawfiles[i].name;
            newFiles.push(fileloc);
        }
    
        let errors = await validate(order);
        
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        res.status(201).send("New Files upploaded");
    };

}
export default FileController;