import "reflect-metadata";
import {createConnection, ConnectionOptions} from "typeorm";
import App from "./app";
import ormconfig  from "./ormconfig";
import GadgetController from "./services/controller"

createConnection(ormconfig as ConnectionOptions).then(async connection => {
    const app: App = new App(8080, new GadgetController());
    app.start();
}).catch(error => console.log(error));
