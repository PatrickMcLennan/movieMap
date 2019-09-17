import { IMovie } from 'Dictionary';
import { createContext } from 'react';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	savedMovies: IMovie[];
	userId: string;
}

const UserContext: React.Context<IUser> = createContext<IUser>({
	email: '',
	firstName: '',
	lastName: '',
	savedMovies: [],
	userId: ''
});

export default UserContext;
