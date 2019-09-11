import { createContext } from 'react';
import { IMovie } from '../../clientDictionary';

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
