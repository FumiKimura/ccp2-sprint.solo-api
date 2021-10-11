import { Router, Request, Response } from "express";
import GadgetManager from "./manager";
import { Gadget } from "../entity/Gadget";


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
        router.get("/gadgetlist", this.getGadgetList);
        router.post("/newgadget", this.postNewGadget);
        return router;
    }

    protected getAllGadgets = async (req: Request, res:Response): Promise<void> => {
        const gadget = await this.manager.getAllGadget();
        res.send(gadget);
    }

    protected getGadgetList = async (req: Request, res:Response): Promise<void> => {
        let gadget;
        const { num } = req.query;
        if(num === undefined){
            gadget = await this.manager.getAllGadget();
            res.send(gadget);
        }else{
            gadget = await this.manager.getGadgetList(parseInt(num as string));
            res.send(gadget);
        }
    }

    protected postNewGadget = async (req: Request, res:Response): Promise<void> => {
        try{
            const newGadget: Gadget = new Gadget();
            newGadget.gadgetName = req.body.gadgeName; 
            newGadget.gadgetType = req.body.gadgetType;
            newGadget.owner = req.body.owner;
            newGadget.characters = req.body.characterId;
            const newGagdet = this.manager.postNewGadget(newGadget);
            //Need to implement get Character by id endpoint to save new gadget
        }catch(e){
            res.sendStatus(500);
        }
    }
}

export default GadgetController;