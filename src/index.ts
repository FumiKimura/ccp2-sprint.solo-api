import {createConnection, ConnectionOptions} from "typeorm";
import App from "./app";
import ormconfig  from "./ormconfig";
import CharacterController from "./services/character/controller";
import GadgetController from "./services/gadget/controller"
import rootController from "./services/root/controller";
import path from "path";

createConnection(ormconfig as ConnectionOptions).then(async connection => {
    const filepath = path.join(__dirname, "../", "src-frontend", "build");
    const filename = "index.html";
    const app: App = new App(8080, new GadgetController(), new CharacterController(), new rootController(filepath, filename));
    app.start();
}).catch(error => console.log(error));
