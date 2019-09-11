import * as React from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import FourOhFour from './pages/FourOhFour/FourOhFour';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SavedMovies from './pages/SavedMovies/SavedMovies';

import { GlobalStyle, theme } from './utils/GlobalStyles';

import { IHomeProps } from './pages/Home/Home';
import { ISavedMovieProps } from './pages/SavedMovies/SavedMovies';

const App: React.FunctionComponent = (): React.ReactElement => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/" render={(): React.ReactElement => <Login />} />
					<Route
						exact
						path="/home/:paramsId"
						render={(props: IHomeProps): React.ReactElement<IHomeProps> => <Home {...props} />}
					/>
					<Route
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
