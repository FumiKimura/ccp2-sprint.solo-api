import express, {Application} from "express";
import GadgetController from "./services/gadget/controller";
import CharacterController from "./services/character/controller";
import rootController from "./services/root/controller";

class App {

    public static readonly DEFAULT_PORT: number = 8080;
    public readonly app: Application;
    public readonly port: number;

    constructor(port: number, gadgetService: GadgetController, characterService: CharacterController, rootService: rootController){
        this.app = express();
        this.port = port || App.DEFAULT_PORT;
        this.app.use(express.json())
        this.app.use(gadgetService.path, gadgetService.router);
        this.app.use(characterService.path, characterService.router);
        this.app.use(rootService.path, rootService.router);
        this.app.use(rootService.path, express.static(rootService.filepath));
    }

    public start(): void {
        this.app.listen(this.port, 
        () => console.log(`Started Listening to ${this.port}`));
    }
}

export default App;