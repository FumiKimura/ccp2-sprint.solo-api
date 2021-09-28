import App from "./app";
import GadgetController from "./services/controller";

const app: App = new App(8080, new GadgetController());
app.start();

