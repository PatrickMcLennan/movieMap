import styled from 'styled-components';

export const StyledSection = styled.section`
	${({ theme: { flexin } }) => flexin()}
	height: 100vh;
	background-color: green;
	overflow: hidden;
`;

export const StyledForm = styled.form`
	${({ theme: { flexin } }) => flexin('flex-start', 'center', 'column')}
	padding: 10px 15px;
	border: 1px solid red;
`;

export const StyledEmailInput = styled.input`
	padding: 8px 11px;
	font-size: 16px;
	line-height: 20px;
`;

export const StyledPasswordInput = styled(StyledEmailInput)`
	margin: 15px 0;
`;

export const StyledSubmitInput = styled(StyledEmailInput)``;
