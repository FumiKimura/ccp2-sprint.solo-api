import { Router, Request, Response } from "express";
import path from "path";

class rootController {
    public path = "/";
    public router: Router;
    public filepath: string;
    public filename: string;

    constructor(filepath, filename){
        this.router = this.setupRoute();
        this.filepath = filepath;
        this.filename = filename;
    }

    protected setupRoute(){
        const router = Router();
        router.get("", this.getStaticFile);
        return router;
    }

    protected getStaticFile = (req: Request, res: Response): void => {
        //res.sendFile(path.join(this.filepath, this.filename));
        res.send("Hello");
    }
}

export default rootController;