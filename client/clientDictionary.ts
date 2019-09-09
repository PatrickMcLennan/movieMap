/**
 * MOVIE RELATED
 */

export interface IMovie {
	title: string;
}

/**
 * USER RELATED
 */

export interface ILocalStorageUser {
	email: string;
	password: string;
}

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	savedMovies: IMovie[];
	userId: string;
}
