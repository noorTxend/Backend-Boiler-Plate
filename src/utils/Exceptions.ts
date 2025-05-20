import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import { JsonWebTokenError } from 'jsonwebtoken';
import { BadRequestError, ConflictError } from '../common/errors/CustomeErrors';

export const GetError = (error: Error): IApiErrorResponse => {
	if (error instanceof JsonWebTokenError) {
		console.log('This is jsonwebtokken error instance', error.stack);
		return {
			status: StatusCodes.FORBIDDEN,
			message: error.message,
		};
	}

	if (error instanceof ZodError) {
		console.log('This is Zod error instance', error.message);
		return {
			status: StatusCodes.BAD_REQUEST,
			message:
				error.issues.length > 1
					? error.issues.map((a) => {
							return `${a.path[0]}: ${a.message}`;
					  })
					: `${error.issues[0]?.path}: ${error.issues[0]?.message}`,
		};
	}

	if (error instanceof BadRequestError) {
		console.log('This is BadRequest error instance', error.message);
		return {
			status: StatusCodes.BAD_REQUEST,
			message: error.message,
			code: error.code,
		};
	}

	if (error instanceof ConflictError) {
		console.log('This is Conflict error instance', error.message);
		return {
			status: StatusCodes.CONFLICT,
			message: error.msg,
			code: error.code,
		};
	}
	return {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		message: error.message ? error.message : 'Intenral Server Error',
	};
};
