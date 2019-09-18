import { createContext } from 'react';

import { IMovie } from 'Dictionary';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	savedMovies: IMovie[];
	seenMovies: IMovie[];
	userId: string;
}

const UserContext: React.Context<IUser> = createContext<IUser>({
	email: '',
	firstName: '',
	lastName: '',
	savedMovies: [],
	seenMovies: [],
	userId: ''
});

export default UserContext;
