// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Root  from './components/root';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
