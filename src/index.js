import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './app.component';
import registerServiceWorker from './registerServiceWorker';

import demoApp from './reducers';

WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const enhancer = compose(applyMiddleware(thunkMiddleware));

const store = createStore(demoApp, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
