import * as React from 'react';

import { StyledMap, StyledMovie, StyledSVG } from './LogoSVG.style';

const LogoSVG: React.FunctionComponent = (): React.ReactElement => (
	<StyledSVG viewBox="0 0 42 42">
		<StyledMovie x="0">movie</StyledMovie>
		<StyledMap x="10">Map</StyledMap>
	</StyledSVG>
);

export default LogoSVG;
