import * as dotenv from 'dotenv';
dotenv.config();

export const SERVER_VARIABLES = Object.freeze({
	SERVER_PORT: process.env.SERVER_PORT,
});

export const UTILS_VARIABLES = Object.freeze({
	ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
	ENCRYPTION_IV: process.env.ENCRYPTION_IV,
	JWT_SECRET: process.env.JWT_SECRET,
});
