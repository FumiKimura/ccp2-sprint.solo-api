import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Gadget } from '../entity/Gadget'
import { Character } from '../entity/Character'
 
export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //Inserting character into "character" table
        await connection
          .createQueryBuilder()
          .insert()
          .into(Character)
          .values([
            {firstName: "Doraemon", lastName: null, species: "Robot Cat", age: -91},
            {firstName: "Nobi", lastName: "Nobita", species: "Human", age: 10},
            {firstName: "Dorami", lastName: null, species: "Robot Cat", age: -94},
            {firstName: "Kuruto", lastName: "Hartman", species: "Human", age: 10},
            {firstName: "Suneo", lastName: "Honekawa", species: "Human", age: 10},
            {firstName: "Takeshi", lastName: "Goda", species: "Human", age: 10},
            {firstName: "Shizuka", lastName: "Minamoto", species: "Human", age: 10}
          ])
          .execute()
      }
}