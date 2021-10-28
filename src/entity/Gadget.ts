import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn} from "typeorm";
import { Character } from "./Character";

@Entity()
export class Gadget {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gadgetName: string;

    @Column()
    gadgetType: string;

    @ManyToOne(() => Character, character => character.id)
    owner: Character;

    @ManyToMany(() => Character, {
        cascade:true
    })
    @JoinTable()
    characters: Character[];
}
