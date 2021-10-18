import { getRepository, Repository, DeleteResult } from "typeorm";
import { Character } from "../../entity/Character";

class CharacterManager {
    public characterRespository: Repository<Character>;

    constructor(){
        this.characterRespository = getRepository(Character);
    }

    public async getAllCharacter(): Promise<Character[]> {
        const characters = await this.characterRespository.find({});
        return Promise.resolve(characters);
    }

    public async getCharacterList(num: number): Promise<Character[]> {
        const characters = await this.characterRespository.find({
            take: num
        });
        return Promise.resolve(characters);
    }

    public async getCharacterById(id: number): Promise<Character> {
        const character = await this.characterRespository.findOne({
            where: {id: id}
        })
        return Promise.resolve(character);
    }

}

export default CharacterManager;