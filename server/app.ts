import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import DataBase from './config/db';

class App{
	/* Esse disgraçado não estava englobando o construtor, 
	middleware e routes*/
	public app: express.Application;
	private morgan: morgan.Morgan;
	private bodyParser;
	private database: DataBase;


	constructor(){
		this.app = express();
		this.middleware();
		this.routes();
		this.database = new Database();
	}

	middleware(){
		this.app.use(morgan('dev'));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: true}));
	}

	routes(){
		this.app.route("/").get((req,res) => res.status(200).json({
			'message': 'Hello world!###'}));
	}

	dataBaseConnection(){
		this.database.createConnection();
	}

	closeDataBaseConnection(message, callback){
		this.database.closeConnection(message, () => callback());
	}
}

export default new App();