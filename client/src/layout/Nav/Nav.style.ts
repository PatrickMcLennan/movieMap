import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
	${({ theme: { flexin } }) => flexin('space-between')}
	padding: 2vh;
`;
