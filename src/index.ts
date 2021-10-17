import "reflect-metadata";
import {createConnection, ConnectionOptions} from "typeorm";
import App from "./app";
import ormconfig  from "./ormconfig";
import CharacterController from "./services/character/controller";
import GadgetController from "./services/gadget/controller"

createConnection(ormconfig as ConnectionOptions).then(async connection => {
    const app: App = new App(8080, new GadgetController(), new CharacterController());
    app.start();
}).catch(error => console.log(error));
