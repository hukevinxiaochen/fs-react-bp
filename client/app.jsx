/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Svg from './Svg';

ReactDOM.render(
  <Provider store={store}>
    Hello there friend!
    <Svg />
  </Provider>,
  document.getElementById('app'),
);
