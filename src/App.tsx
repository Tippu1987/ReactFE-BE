import React, { lazy, Suspense } from 'react';
import { HomePage } from './components/HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';
import { SignInPage } from './components/SignInPage';
import { NotFoundPage } from './components/NotFoundPage';
import { QuestionPage } from './components/QuestionPage';
import { HeaderWithRouter as Header } from './components/Header';
const AskPage = lazy(() => import('./components/AskPage'));

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
				<Route path="/ask">
					<Suspense
						fallback={
							<div
								css={css`
									margin-top: 100px;
									text-align: center;
								`}
							>
								Loading....
							</div>
						}
					>
						<AskPage />
					</Suspense>
				</Route>
				<Route exact path="/signin" component={SignInPage} />
				<Route exact path="/questions/:questionId" component={QuestionPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</div>
);
export default App;
