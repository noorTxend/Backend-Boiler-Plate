// import packages and dependancies
import express, { Application } from 'express';
import { SERVER_VARIABLES } from './config/EnvironmentalVariables';

// intialization of dependancies
const SERVER_PORT = SERVER_VARIABLES.SERVER_PORT;
const app: Application = express();

//listening the server
const server = () => {
	app.listen(Number(SERVER_PORT), async () => {
		console.log(`Server started on ${SERVER_PORT}!.`);
	});
};

server();

export default { app, server };
