import * as React from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import UserContext, { IUser } from 'Context/userContext';
import useMount from 'Hook/useMount';
import Nav from 'Layout/Nav/Nav';

export interface IHomeProps extends RouteComponentProps<{ paramsId: string }, StaticContext, any> {}

const Home: React.FC<IHomeProps> = (props: IHomeProps): React.ReactElement => {
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
