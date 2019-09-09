import * as dotenv from 'dotenv';
import { Response } from 'express';
import { ILoginFailure, ILoginReq, ILoginSuccess } from '../serverDictionary';
dotenv.config();

const getLogin = (req: ILoginReq, res: ILoginSuccess | ILoginFailure) => {
	const { email, password } = req.body;

	switch (email && password) {
		// Good
		case email === process.env.EMAIL && password === process.env.PASSWORD:
			return res.status(200).json({
				message: `Welcome back.`
			});
		// Wrong Email.
		case email !== process.env.EMAIL && password === process.env.PASSWORD:
			return res.status(400).json({
				country: 23,
				message: `An invalid email was supplied.`
			});
		// Wrong Password.
		case email === process.env.EMAIL && password !== process.env.PASSWORD:
			return res.status(400).json({
				message: `An invalid password was supplied.`
			});
		// Wrong Everything.
		case email !== process.env.EMAIL && password !== process.env.PASSWORD:
			return res.status(400).json({
				message: `Both email & password are invalid.`
			});
		// Whatever else.
		default:
			return res.status(500).json({
				message: 'There was a server error logging you in.'
			});
	}
};

export default getLogin;
