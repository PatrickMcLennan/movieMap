import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body {
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }
`;

export const theme: object = {
	// Layout
	flexin: (jc: string = `center`, ai: string = `center`, fd: string = `row`, fw: string = `nowrap`) =>
		css`
			display: flex;
			justify-content: ${jc};
			align-items: ${ai};
			flex-direction: ${fd};
			flex-wrap: ${fw};
		`,
	inputStyles: (padding: string = `8px 11px`, fontSize: string = `16px`, lineHeight: string = `20px`) => css`
		padding: ${padding};
		font-size: ${fontSize};
		line-height: ${lineHeight};
	`
};
