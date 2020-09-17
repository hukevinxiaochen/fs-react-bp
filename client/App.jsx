/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Main from './Main';
import '../public/app.css'; // use a basic global fallback stylesheet

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
