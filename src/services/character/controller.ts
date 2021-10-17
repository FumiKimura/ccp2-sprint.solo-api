import { Router, Request, Response } from "express";
import CharacterManager from "./manager";
import { Character } from "../../entity/Character";

class CharacterController {
    public path = "/character";
    public router: Router;
    public manager: CharacterManager;

    constructor(){
        this.router = this.setupRoute();
        this.manager = new CharacterManager();
    }

    protected setupRoute(){
        const router = Router();
        router.get("/allcharacter", this.getAllCharacter);
        router.get("/characterlist", this.getCharacterList);
        router.get("/characterbyid", this.getCharacterById);
        return router;
    }

    protected getAllCharacter = async (req: Request, res:Response): Promise<void> => {
        const characters = await this.manager.getAllCharacter();
        res.send(characters);
    }

    protected getCharacterList = async (req: Request, res:Response): Promise<void> => {
        let gadget;
        const { num } = req.query;
        if(num === undefined){
            gadget = await this.manager.getAllCharacter();
            res.send(gadget);
        }else{
            gadget = await this.manager.getCharacterList(parseInt(num as string));
            res.send(gadget);
        }
    }

    protected getCharacterById = async (req: Request, res:Response): Promise<void> => {
        const { id } = req.query;
        if(id === undefined){
            res.sendStatus(404);
        }else{
            const gadget = await this.manager.getCharacterById(parseInt(id as string));
            res.send(gadget);
        }
    }
}

export default CharacterController;