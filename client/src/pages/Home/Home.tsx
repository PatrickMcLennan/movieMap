import * as React from 'react';

import Nav from '../../layout/Nav/Nav';

import { IUser } from '../../../clientDictionary';
import UserContext from '../../contexts/userContext';
import useMount from '../../hooks/useMount';

import { RouteComponentProps } from 'react-router-dom';

export interface IHomeProps extends RouteComponentProps {
	paramsId: string;
}

const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps): React.ReactElement<IHomeProps> => {
	const { useContext } = React;
	const { userId } = useContext<IUser>(UserContext);

	useMount('Home', userId, props);

	return (
		<section>
			<Nav />
		</section>
	);
};

export default Home;
