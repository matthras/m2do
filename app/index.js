import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import HomePage from './containers/HomePage';
import './app.global.css';

render(
  <AppContainer>
    <HomePage />
  </AppContainer>,
  document.getElementById('root')
);