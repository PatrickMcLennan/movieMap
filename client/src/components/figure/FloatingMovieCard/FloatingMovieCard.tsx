import UserContext, { IUser } from 'Context/userContext';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledFigcaption, StyledFigure, StyledH6, StyledImg, StyledP } from './FloatingMovieCard.style';

interface IFloatingMovieCardProps {
	copy: string;
	posterHref: string;
	saved: boolean;
	title: string;
	unseen: boolean;
}

const FloatingMovieCard: React.FC<IFloatingMovieCardProps> = ({
	copy,
	posterHref,
	saved,
	title,
	unseen
}): React.ReactElement => (
	<StyledFigure>
		<StyledImg src={posterHref} alt={title} />
		<StyledH6>{title}</StyledH6>
		<StyledFigcaption>
			<StyledP>{copy}</StyledP>
		</StyledFigcaption>
	</StyledFigure>
);

export default FloatingMovieCard;
