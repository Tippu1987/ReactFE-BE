import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';

const App = () => (
  <div
    className="App"
    css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${gray2};
    `}
  >
    <Header />
    <HomePage />
  </div>
);

export default App;
