import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import DataBase from "./config/db";
import CrushRoutes from "./modules/user/routes";

class App {
  public app: express.Application;
  private morgan: morgan.Morgan;
  private bodyParser;
  private database: DataBase;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.database = new DataBase();
    // No metodo construtor instanciamos a classe DataBase
    this.dataBaseConnection();
    // Método construtor vamos chamar o método que abre nossa conexão para quando a nossa API rodar uma das primeiras coisas que será feita é a abertura da conexão
    //this.closeDataBaseConnection();
    // Estou fazendo uma gambiarra aqui não sei se vai funcionar. Bora conferir.
  }

  dataBaseConnection() {
    this.database.createConnection();
    // Vamos criar um método de conexão
  }

  closeDataBaseConnection(message, callback) {
    this.database.closeConnection(message, () => callback());
    // Vamos criar um método para fechar a classe
  }

  middleware() {
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.app.route("/").get((req, res) =>
      res.status(200).json({
        message: "Hello world!###"
      })
    );
    this.app.route("/api/crushs").get(CrushRoutes.getAll);
    this.app.route("/api/crushs/:id").get(CrushRoutes.getByID);
    this.app.route("/api/crushs").post(CrushRoutes.create);
    this.app.route("/api/crushs/:id").put(CrushRoutes.update);
    this.app.route("/api/crushs/:id").delete(CrushRoutes.delete);
  }
}

export default new App();
