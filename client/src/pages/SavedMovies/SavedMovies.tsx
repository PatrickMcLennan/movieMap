import * as React from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

import useMount from '../../hooks/useMount';

import UserContext from '../../contexts/userContext';
import Nav from '../../layout/Nav/Nav';

import { IUser } from '../../../clientDictionary';

export interface ISavedMovieProps extends RouteComponentProps {
	paramsId: string;
}

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
