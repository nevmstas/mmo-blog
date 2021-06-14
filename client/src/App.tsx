import React from 'react';
import logo from './logo.svg';
import './App.css';
/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, jsx, css, Theme } from '@emotion/react';
import { WorldBackground } from './styles/body/WorldBackground';
import WorldBack from './styles/WorldBackgroundWrapper'
import NameForm from './screens/auth/Name';
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
    <NameForm />
    </div>
  );
}

export default App;
