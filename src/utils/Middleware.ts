import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const cors = (req: Request, res: Response, next: NextFunction): void => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With, sentry-trace, content-type, authorization, accept',
	);
	res.setHeader('Access-Control-Allow-Credentials', 'false');
	if (req.method === 'OPTIONS') {
		res.sendStatus(StatusCodes.OK);
	} else {
		next();
	}
};

export default {
	cors,
};
