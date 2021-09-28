import { Router, Request, Response } from "express";

class GadgetController {
    public router: Router;

    constructor(){
        const router = Router();
        this.router = router.get("/", 
        (req: Request, res: Response) => {
            res.send("<h1>DOKODEMO DOOR!!!</h1>");
        });
    }
}

export default GadgetController;