import { getRepository, Repository, DeleteResult } from "typeorm";
import { Gadget } from "../../entity/Gadget";
import { Character } from "../../entity/Character";

class GadgetManager{    
    public gadgetRepository: Repository<Gadget>;

    constructor(){
        this.gadgetRepository = getRepository(Gadget);
    }

    public async getAllGadget(): Promise<Gadget[]> {
        const gadgets = await this.gadgetRepository.find({
            relations:["characters"]
        });
        return Promise.resolve(gadgets);
    }

    public async getGadgetList(num: number): Promise<Gadget[]> {
        const gadgets = await this.gadgetRepository.find({
            relations:["characters"],
            take: num
        });
        return Promise.resolve(gadgets);
    }

    public async getGadgetById(id: number): Promise<Gadget[]> {
        const gadget = await this.gadgetRepository.find({
            relations:["characters"],
            where: {id:id}
        })
        return Promise.resolve(gadget);
    }

    public async postNewGadget(newGadget: Gadget): Promise<void> {
        await this.gadgetRepository.save(newGadget);
    }
}

export default GadgetManager;