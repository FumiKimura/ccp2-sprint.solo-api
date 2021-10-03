import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Character } from "./Character";

@Entity()
export class Gadget {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gadgetName: string;

    @Column()
    gadgetType: string;

    @ManyToMany(() => Character)
    @JoinTable()
    characters: Character[];
}
