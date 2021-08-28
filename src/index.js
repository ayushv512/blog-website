import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, composeEnhancers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk),
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
