export class BadRequestError extends Error {
	code: string;
	constructor(message: string, code: string) {
		super(message);
		this.name = 'BadRequestError';
		this.code = code;
	}
}

export class ForbiddenError extends Error {
	code: string;
	constructor(message: string, code: string) {
		super(message);
		this.name = 'ForbiddenError';
		this.code = code;
	}
}

export class ConflictError extends Error {
	code: string;
	msg: string;
	constructor(message: string, code: string) {
		super(message);
		this.name = 'ConflictError';
		this.msg = message;
		this.code = code;
	}
}
