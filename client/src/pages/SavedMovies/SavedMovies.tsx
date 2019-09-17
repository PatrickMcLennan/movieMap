import UserContext, { IUser } from 'Context/userContext';
import useMount from 'Hook/useMount';
import Nav from 'Layout/Nav/Nav';

import * as React from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

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
