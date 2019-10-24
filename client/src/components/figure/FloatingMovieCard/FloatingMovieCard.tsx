import * as React from 'react';
import { Link } from 'react-router-dom';

import UserContext, { IUser } from 'Context/userContext';
import {
	StyledFigcaption,
	StyledFigure,
	StyledH6,
	StyledImg,
	StyledP,
	StyledRatingBox
} from './FloatingMovieCard.style';

interface IFloatingMovieCardProps {
	copy: string;
	posterHref: string;
	quality: number[];
	rating: number[];
	saved: boolean;
	title: string;
	unseen: boolean;
}

const FloatingMovieCard: React.FC<IFloatingMovieCardProps> = ({
	copy,
	posterHref,
	quality,
	rating,
	saved,
	title,
	unseen
}): React.ReactElement => (
	<StyledFigure>
		<StyledImg src={posterHref} alt={title} />
		<StyledRatingBox />
		<StyledH6>{title}</StyledH6>
		<StyledFigcaption>
			<StyledP>{copy}</StyledP>
		</StyledFigcaption>
	</StyledFigure>
);

export default FloatingMovieCard;
