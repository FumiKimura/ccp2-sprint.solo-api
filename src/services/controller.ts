import { Router, Request, Response } from "express";
import GadgetManager from "./manager";


class GadgetController {
    public path = "/gadget";
    public router: Router;
    public manager: GadgetManager;

    constructor(){
        this.router = this.setupRoute();
        this.manager = new GadgetManager();
    }

    protected setupRoute(){
        const router = Router();
        router.get("/allgadget", this.getAllGadgets);

        return router;
    }

    protected getAllGadgets = async (req: Request, res:Response): Promise<void> => {
        const gadget = await this.manager.getAllGadget();
        res.send(gadget);
    }
}

export default GadgetController;