import { Router, Request, Response } from "express";
import GadgetManager from "./manager";
import { Gadget } from "../../entity/Gadget";


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
        router.get("/gadgetbyid", this.getGadgetById);
        router.post("/newgadget", this.postNewGadget);
        router.patch("/updategadget", this.updateGadget);
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

    protected getGadgetById = async (req: Request, res:Response): Promise<void> => {
        const { id } = req.query;
        if(id === undefined){
            res.sendStatus(404);
        }else{
            const gadget = await this.manager.getGadgetById(parseInt(id as string));
            res.send(gadget);
        }
    }

    protected postNewGadget = async (req: Request, res:Response): Promise<void> => {
        try{
            const newGadget: Gadget = new Gadget();
            newGadget.gadgetName = req.body.gadgetName; 
            newGadget.gadgetType = req.body.gadgetType;
            const owner = parseInt(req.body.ownerId);
            const characters = req.body.characterId.map(id => parseInt(id));
            res.send(await this.manager.postNewGadget(newGadget, owner, characters));
        }catch(e){
            console.log(e);
            res.sendStatus(400);
        }
    }

    protected updateGadget = async (req: Request, res:Response): Promise<void> => {
        try {
            const updateGadget = new Gadget();
            updateGadget.gadgetName = req.body.gadgetName; 
            updateGadget.gadgetType = req.body.gadgetType;
            const owner = parseInt(req.body.ownerId);

            //Cannot append new character to gadget's user and delete specific a user
            //New array of characters overwrites given gadgets users (array of characters)
            const characters = req.body.characterId.map(id => parseInt(id));
            this.manager.updateGadget(updateGadget);
        }catch(e){
            console.log(e);
            res.sendStatus(404);
        }
    }
}

export default GadgetController;