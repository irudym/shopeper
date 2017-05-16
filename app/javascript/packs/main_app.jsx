import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FinderContainer from './containers/finder_container';
import { shopeperReducer } from './redux/reducers';


/* eslint-disable no-underscore-dangle */
const store = createStore(
  shopeperReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */


ReactDOM.render(
  <Provider store={store}>
    <FinderContainer />
  </Provider>,
  document.getElementById('app-block')
);
