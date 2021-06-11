import React from 'react';
import logo from './logo.svg';
import './App.css';
/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, jsx, css, Theme } from '@emotion/react';
import { WorldBackground } from './styles/body/WorldBackground';
import WorldBack from './styles/WorldBackgroundWrapper'
function App() {
  return (
    <div className="App">
      <Global
        styles={(theme: Theme) => css`
          * {
            font-family: 'Karla', sans-serif;
          }
          ${WorldBackground(theme)}
        `}
      />
    <WorldBack />
    </div>
  );
}

export default App;
