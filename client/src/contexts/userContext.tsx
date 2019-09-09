import { createContext } from 'react';
import { IUser } from '../../clientDictionary';

const UserContext: React.Context<IUser> = createContext<IUser>({
	email: '',
	firstName: '',
	lastName: '',
	savedMovies: [],
	userId: ''
});

export default UserContext;
