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

/**
 * API
 */

export interface IServerResponse extends Response {
	message: string;
}
