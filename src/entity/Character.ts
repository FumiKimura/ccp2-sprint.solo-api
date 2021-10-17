import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Gadget } from "./Gadget";

@Entity()
export class Character {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column()
    species: string;

    @Column()
    age: number

    @ManyToMany(() => Gadget, {
        cascade:true
    })
    @JoinTable()
    gadgets: Gadget[];
}
