import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
//provider is a HOC that wraps app and provides access to store
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import App from './App';
import { userLoggedIn } from "./actions/auth";
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
