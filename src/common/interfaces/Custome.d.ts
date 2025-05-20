interface IAuthUser {
	roleId: number;
	[key: string]: any;
}

declare namespace Express {
	export interface Request {
		authUser: IAuthUser;
	}
}
