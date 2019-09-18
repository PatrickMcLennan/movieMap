import * as React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from 'Component/svg/LogoSVG/LogoSVG';
import UserContext, { IUser } from 'Context/userContext';
import { StyledNav } from './Nav.style';

const Nav: React.FC = (): React.ReactElement => {
	const { useContext, useState } = React;
	const { email, firstName, savedMovies, userId } = useContext<IUser>(UserContext);
	const [mobileDropdown, setMobileDropdown] = useState<boolean>(false);

	return (
		<StyledNav>
			<LogoSVG />

			<div>
				<Link to={`/savedMovies/${userId}`}>Saved</Link>
				<Link to={`/recentlyWatched/${userId}`}>Recently Watched</Link>
			</div>
		</StyledNav>
	);
};

export default Nav;
