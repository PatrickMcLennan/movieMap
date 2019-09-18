import styled from 'styled-components';

export const StyledSection = styled.section`
	${({ theme: { flexin } }) => flexin()}
	background-color: green;
	height: 100%;
`;
