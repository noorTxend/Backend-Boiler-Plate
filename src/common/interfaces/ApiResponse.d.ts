interface IApiResponse {
	status: number;
}

interface IApiSuccessReponse extends IApiResponse {
	data: Record<string, number | boolean | string | object>;
}

interface IApiErrorResponse extends IApiResponse {
	message: any;
	code?: string;
}
