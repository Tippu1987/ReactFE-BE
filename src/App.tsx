import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';
import { AskPage } from './components/AskPage';
import { SignInPage } from './components/SignInPage';
import { NotFoundPage } from './components/NotFoundPage';

const App = () => (
	<div
		className="App"
		css={css`
			font-family: ${fontFamily};
			font-size: ${fontSize};
			color: ${gray2};
		`}
	>
		<BrowserRouter>
			<Route component={Header} />
			<Switch>
				<Redirect from="/home" to="/" />
				<Route exact path="/" component={HomePage} />
				<Route exact path="/search" component={SearchPage} />
				<Route exact path="/ask" component={AskPage} />
				<Route exact path="/signin" component={SignInPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</div>
);
export default App;
