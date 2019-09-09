import * as React from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../../../clientDictionary';
import UserContext from '../../contexts/userContext';

const Nav: React.FC = (): React.ReactElement => {
	const { useContext, useState } = React;
	const { email, firstName, savedMovies, userId } = useContext<IUser>(UserContext);
	const [mobileDropdown, setMobileDropdown] = useState<boolean>(false);

	return (
		<nav>
			<h1>movieMap</h1>

			<div>
				<Link to={`/savedMovies/${userId}`}>Saved</Link>
				<Link to={`/recentlyWatched/${userId}`}>Recently Watched</Link>
			</div>
		</nav>
	);
};

export default Nav;
