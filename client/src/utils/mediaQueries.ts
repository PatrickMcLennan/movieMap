// import { css } from 'styled-components';

// interface IMedia {
// 	[key: string]: number;
// }

// const sizes: Object = {
// 	fourteen: 1400,
// 	thirteen: 1300,
// 	twelve: 1200,
// 	// tslint:disable-next-line
// 	eleven: 1100,
// 	ten: 1000,
// 	nine: 900,
// 	eight: 800,
// 	seven: 700,
// 	six: 600,
// 	five: 500,
// 	four: 400
// };

// const media: IMedia = Object.keys(sizes).reduce((final: Object, size: string) => {
// 	return {
// 		...final,
// 		[size]: (...args: number[]) => {
// 			return css`
// 				@media (max-width: ${sizes[size]}px) {
// 					${css(...args)}
// 				}
// 			`;
// 		}
// 	};
// }, {});

// export default media;
