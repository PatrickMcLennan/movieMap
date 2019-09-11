import * as React from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../../../clientDictionary';
import UserContext from '../../contexts/userContext';

const FourOhFour: React.FunctionComponent = (): React.ReactElement => {
	const { useContext, useEffect } = React;
	const { userId } = useContext<IUser>(UserContext);

	useEffect(() => {
		window.scroll(0, 0);
		document.title = 'movieMap | 404';
	}, []);

	return (
		<section>
			<div>
				<h3>404</h3>
				<h4>You seem lost.</h4>

				<p>
					You're seeing this because you're trying to access a page that doesn't exist. Sorry friendo, let's
					head back home.
				</p>

				<Link to={`/home/${userId}`}>Home</Link>
			</div>
		</section>
	);
};

export default FourOhFour;
