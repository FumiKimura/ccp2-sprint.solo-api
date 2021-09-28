import express, {Application} from "express";
import GadgetController from "./services/controller";

class App {

    public static readonly DEFAULT_PORT: number = 8080;

    public readonly app: Application;
    public readonly port: number;

    constructor(port: number, service: GadgetController){
        this.app = express();
        this.port = port || App.DEFAULT_PORT;
        this.app.use("/", service.router);
    }

    public start(): void {
        this.app.listen(this.port, 
        () => console.log(`Started Listening to ${this.port}`));
    }
}

export default App;