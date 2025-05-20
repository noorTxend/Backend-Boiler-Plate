import { Request, Response } from 'express';
import { ZodType } from 'zod';
import { GetError } from './Exceptions';

const sendSuccessResponse = async (
	_req: Request,
	res: Response,
	status: number,
	data: object,
): Promise<void> => {
	if (data instanceof ZodType) {
		console.log('Response parsed!');
	}
	// console.log(req.path);
	res.status(status).json(data);
};

const sendErrorResponse = async (_req: Request, res: Response, error: unknown): Promise<void> => {
	const responseError = GetError(error as Error);
	// console.log(req.path);
	res.status(responseError.status).json({
		message: responseError.message,
		...(responseError.code && { code: responseError.code }),
	});
};

export default { sendSuccessResponse, sendErrorResponse };
