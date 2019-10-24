import { createContext } from 'react';

import { IMovie, IServerResponse } from 'Dictionary';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	// rateMovie: (rating: number) => Promise<IServerResponse>;
	savedMovies: IMovie[];
	seenMovies: IMovie[];
	userId: string;
}

const UserContext: React.Context<IUser> = createContext<IUser>({
	email: '',
	firstName: '',
	lastName: '',
	// rateMovie: (rating: number): Promise<IServerResponse> => {
	// 	const rateMovieCall: XMLHttpRequest = new XMLHttpRequest();
	// 	return rateMovieCall
	// 		.open('PATCH', 'https://myserver.com/whatever')
	// 		.then((response: IServerResponse) => console.log(response));
	// },
	savedMovies: [],
	seenMovies: [],
	userId: ''
});

export default UserContext;

/**
 * loader bar
 *   -https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onprogress-
 */
