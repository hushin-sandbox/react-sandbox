import './favicon.ico';
import './index.html';
import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import App from 'components/App/App';

import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
