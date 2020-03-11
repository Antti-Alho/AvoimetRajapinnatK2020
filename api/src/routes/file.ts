import { Router } from "express";
import FileController from "../controller/FileController";
import { checkJwt } from "../middlewares/checkJwt";
import * as formidable from "express-formidable";

var router = Router();

router.post("/upload", [ /*checkJwt,*/ formidable({
    encoding: 'utf-8',
    uploadDir: __dirname + '/uploads/',
    multiples: true, // req.files to be arrays of files
  })],  FileController.upload);

export default router;