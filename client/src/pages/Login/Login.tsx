import * as React from 'react';

import loginContext, { ILogin } from 'Context/loginContext';
import { ILocalStorageUser } from 'Dictionary';
import Nav from 'Layout/Nav/Nav';
import { StyledEmailInput, StyledForm, StyledPasswordInput, StyledSection } from './Login.style';

const Login: React.FunctionComponent = (): React.ReactElement => {
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
			<StyledForm data-testid="login-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
				<StyledEmailInput
					data-testid="login-email"
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
					type="email"
					value={email}
				/>
				<StyledPasswordInput
					data-testid="login-password"
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
					type="password"
					value={password}
				/>
				<label htmlFor="saveUser">
					Remember me on this device
					<input
						data-testid="login-remember"
						checked={saveUser}
						id="saveUser"
						onChange={(): void => setSaveUser(!saveUser)}
						type="checkbox"
					/>
				</label>
				<input data-testid="login-submit" type="submit" value="Log In" />
			</StyledForm>
		</StyledSection>
	);
};

export default Login;
