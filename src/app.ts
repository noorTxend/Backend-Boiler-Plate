// import packages and dependancies
import express, { Application } from 'express';
import { SERVER_VARIABLES } from './config/EnvironmentalVariables';
import Middleware from './utils/Middleware';

// intialization of dependancies
const SERVER_PORT = SERVER_VARIABLES.SERVER_PORT;
const app: Application = express();

//setting up the applicaton
app.use(Middleware.cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, _res, next) => {
	console.log(req.path);
	next();
});
// app.use(apis);

//listening the server
const server = () => {
	app.listen(Number(SERVER_PORT), async () => {
		console.log(`Server started on ${SERVER_PORT}!.`);
	});
};

server();

export default { app, server };
