import styled from 'styled-components';

export const StyledSection = styled.section`
	${({ theme: { flexin } }) => flexin()}
	width: 100%;
	height: 50px;
`;
