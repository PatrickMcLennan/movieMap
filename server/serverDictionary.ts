import { Request, Response } from 'express';
/**
 * GET METHODS
 */

export interface ILoginReq extends Request {
	email: string;
	password: string;
}

export interface ILoginSuccess extends Response {
	message: string;
}

export interface ILoginFailure extends Response {
	message: string;
}
