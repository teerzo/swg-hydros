// PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'helpers/store';
// LOCAL
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// setup fake backend
// import { configureFakeBackend } from 'helpers/fake-backend';
// configureFakeBackend();

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


// import { reducers } from './reducers';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));


// console.log('process.env', process.env);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
