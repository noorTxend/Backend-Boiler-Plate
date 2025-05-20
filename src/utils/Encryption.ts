import * as crypto from 'crypto';
import { UTILS_VARIABLES } from '../config/EnvironmentalVariables';

const algorithm: string = 'aes-256-cbc';
const key: Buffer = Buffer.from(UTILS_VARIABLES.ENCRYPTION_KEY as string, 'hex');
const iv: Buffer = Buffer.from(UTILS_VARIABLES.ENCRYPTION_IV as string, 'hex');

// Encrypting
export const encryptObject = (obj: any): string => {
	const jsonString: string = JSON.stringify(obj);
	const cipher: crypto.Cipher = crypto.createCipheriv(algorithm, key, iv);
	let encrypted: Buffer = cipher.update(jsonString);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return iv.toString('hex') + ':' + encrypted.toString('hex');
};

// Decrypting
export const decryptObject = (text: string): object => {
	const textParts: string[] = text.split(':');
	const iv: Buffer = Buffer.from(textParts.shift() as string, 'hex');
	const encryptedText: Buffer = Buffer.from(textParts.join(':'), 'hex');
	const decipher: crypto.Decipher = crypto.createDecipheriv(algorithm, key, iv);
	let decrypted: Buffer = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	const jsonString: string = decrypted.toString();
	return JSON.parse(jsonString);
};
