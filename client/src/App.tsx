import * as React from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'Layout/Nav/Nav';

import FourOhFour from 'Page/FourOhFour/FourOhFour';
import Home, { IHomeProps } from 'Page/Home/Home';
import Login from 'Page/Login/Login';
import SavedMovies, { ISavedMovieProps } from 'Page/SavedMovies/SavedMovies';
import { GlobalStyle, theme } from 'Utility/GlobalStyles';

const App: React.FC = (): React.ReactElement => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" render={(): React.ReactElement => <Login />} />
					<Route
						exact
						path="/home/:paramsId"
						render={(props: IHomeProps): React.ReactElement<IHomeProps> => <Home {...props} />}
					/>
					<Route
						exact
						path="/savedMovies/:paramsId"
						render={(props: ISavedMovieProps): React.ReactElement<ISavedMovieProps> => (
							<SavedMovies {...props} />
						)}
					/>
					<Route path="/" render={(): React.ReactElement<RouteProps> => <FourOhFour />} />
				</Switch>
			</Router>
		</ThemeProvider>
	</>
);

export default App;
