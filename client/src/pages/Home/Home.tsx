import * as React from 'react';

import Nav from '../../layout/Nav/Nav';

import UserContext, { IUser } from '../../contexts/userContext';
import useMount from '../../hooks/useMount';

import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

export interface IHomeProps extends RouteComponentProps<{ paramsId: string }, StaticContext, any> {}

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
