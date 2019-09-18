import * as React from 'react';

import { StyledMap, StyledMovie, StyledSVG } from './LogoSVG.style';

const LogoSVG: React.FunctionComponent = (): React.ReactElement => (
	<StyledSVG viewBox="0 0 110 23">
		<StyledMovie x="0" y="17.5">
			movie
		</StyledMovie>
		<StyledMap x="49" y="17.5">
			Map
		</StyledMap>
	</StyledSVG>
);

export default LogoSVG;
