import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import useMount from '../../hooks/useMount';

import UserContext, { IUser } from '../../contexts/userContext';
import Nav from '../../layout/Nav/Nav';

import { StaticContext } from 'react-router';

export interface ISavedMovieProps extends RouteComponentProps<{ paramsId: string }, StaticContext, any> {}

const SavedMovies: React.FunctionComponent<ISavedMovieProps> = (props: ISavedMovieProps): React.ReactElement => {
	const { useContext } = React;
	const { userId } = useContext<IUser>(UserContext);

	useMount('Saved Movies', userId, props);

	// hello;

	return (
		<section>
			<Nav />
		</section>
	);
};

export default SavedMovies;
