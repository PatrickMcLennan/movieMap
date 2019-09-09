import * as React from 'react';
import loginContext, { ILogin } from '../../contexts/loginContext';
import { StyledSection } from './Login.style';

import { ILocalStorageUser } from '../../../clientDictionary';

const Login: React.FC = (): React.ReactElement => {
	const { useContext, useEffect, useState } = React;
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [saveUser, setSaveUser] = useState<boolean>(false);
	const { login, checkLocalStorage } = useContext<ILogin>(loginContext);

	useEffect((): void => {
		window.scrollTo(0, 0);
		document.title = `movieMap | Log In`;
		const user: ILocalStorageUser | null = checkLocalStorage();
		if (user) {
			setEmail(user.email);
			setPassword(user.password);
			setSaveUser(true);
		} else {
			setSaveUser(true);
		}
	}, []);

	return (
		<StyledSection>
			<form onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
					type="email"
					value={email}
				/>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
					type="password"
					value={password}
				/>
				<label htmlFor="saveUser">
					Remember me on this device
					<input checked={saveUser} id="saveUser" onChange={() => setSaveUser(!saveUser)} type="checkbox" />
				</label>
				<input type="submit" value="Log In" />
			</form>
		</StyledSection>
	);
};

export default Login;
