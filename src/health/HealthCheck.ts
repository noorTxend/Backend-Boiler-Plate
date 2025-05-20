import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const isDatabaseConnected = async (): Promise<Boolean> => {
	try {
		// await model.findOne({}).lean();
		return true;
	} catch (error) {
		return false;
	}
};

const checkPromise = async (): Promise<any> => {
	try {
		const isDatabaseReady = await isDatabaseConnected();

		if (!isDatabaseReady) {
			throw new Error('Database Failure');
		}
	} catch (error) {
		console.log({ health: error });
	}
};

export const HealthCheck = {
	liveness: async (_req: Request, res: Response): Promise<any> => {
		try {
			await checkPromise();
			console.log('Server is live');
			res.sendStatus(StatusCodes.OK);
		} catch (error) {
			res.sendStatus(StatusCodes.SERVICE_UNAVAILABLE);
		}
	},

	readiness: async (_req: Request, res: Response): Promise<any> => {
		try {
			await checkPromise();
			console.log('Server is ready');
			res.sendStatus(StatusCodes.OK);
		} catch (error) {
			res.sendStatus(StatusCodes.SERVICE_UNAVAILABLE);
		}
	},

	health: async (_req: Request, res: Response): Promise<any> => {
		try {
			await checkPromise();
			console.log('Server is healthy');
			res.sendStatus(StatusCodes.OK);
		} catch (error) {
			res.sendStatus(StatusCodes.SERVICE_UNAVAILABLE);
		}
	},
};
