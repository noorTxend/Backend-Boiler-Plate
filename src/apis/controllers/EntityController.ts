import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ResponseManager from '../../utils/ResponseManager';

export const EntityController = {
	test: async (req: Request, res: Response): Promise<void> => {
		try {
			const testMessage = await {
				success: true,
				message: 'server is up and running perfectly',
			};
			ResponseManager.sendSuccessResponse(req, res, StatusCodes.OK, testMessage);
		} catch (error) {
			ResponseManager.sendErrorResponse(req, res, error);
		}
	},
};
