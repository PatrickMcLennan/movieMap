import { ILocalStorageUser } from 'Dictionary';
import { createContext } from 'react';

export interface ILogin {
	checkLocalStorage: () => ILocalStorageUser | null;
	login: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginContext: React.Context<ILogin> = createContext<ILogin>({
	checkLocalStorage: () => JSON.parse(localStorage.getItem('movieMapUser')),
	login: (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	}
});

export default LoginContext;
