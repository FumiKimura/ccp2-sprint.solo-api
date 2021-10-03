import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
}
