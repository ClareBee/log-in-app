import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
//provider is a HOC that wraps app and provides access to store
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import App from './App';
import decode from 'jwt-decode';
import { userLoggedIn } from './actions/auth';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
if(localStorage.bookwormJWT){
  const payload = decode(localStorage.bookwormJWT);
  const user = { token: localStorage.bookwormJWT, email: payload.email, confirmed: payload.confirmed};
  store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
  // route renders app and provides location/history etc - workaround
  <BrowserRouter>
    <Provider store={store}><Route component={App} /></Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
