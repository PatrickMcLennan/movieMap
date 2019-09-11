import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const useMount = (newTitle: string, userId: string, props: RouteComponentProps<{ paramsId: string }>): void =>
	useEffect((): void => {
		const paramsId: string = props.match.params.paramsId;
		window.scrollTo(0, 0);
		userId === paramsId ? (document.title = `movieMap | ${newTitle}`) : props.history.push('/');
	}, []);

export default useMount;
