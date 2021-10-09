import { getRepository, Repository, DeleteResult } from "typeorm";
import { Gadget } from "../entity/Gadget";

class GadgetManager{    
    public gadgetRepository: Repository<Gadget>;

    constructor(){
        this.gadgetRepository = getRepository(Gadget);
    }

    public async getAllGadget(): Promise<Gadget[]>{
        const gadgets = await this.gadgetRepository.find({
            relations:["characters"]
        });
        return Promise.resolve(gadgets);
    }
}

export default GadgetManager;