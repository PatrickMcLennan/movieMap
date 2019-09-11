import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import 'jest';
import 'jest-extended';
import 'jest-styled-components';
import * as React from 'react';
import Login from '../Login';

afterEach(cleanup);

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/globalStyles';

const renderLogin = () =>
	render(
		<ThemeProvider theme={theme}>
			<Login />
		</ThemeProvider>
	);

test('<Login /> ', () => {
	const { queryByTestId } = renderLogin();
	const form = queryByTestId('login-form');
	const email = queryByTestId('login-email');
	const password = queryByTestId('login-password');
	const submit = queryByTestId('login-submit');

	[form, email, password, submit].forEach(element => expect(element).toBeInTheDocument());
});
