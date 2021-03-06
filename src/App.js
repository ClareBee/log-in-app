import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import Dashboardpage from './components/pages/Dashboardpage';
import Signuppage from './components/pages/Signuppage';
import Confirmationpage from './components/pages/Confirmationpage';
import ForgottenPasswordpage from './components/pages/ForgottenPasswordpage';
import ResetPasswordpage from './components/pages/ResetPasswordpage';
import NewBookpage from './components/pages/NewBookpage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';


const App = ({location, isAuthenticated}) => <div className="ui container">
  {isAuthenticated && <TopNavigation />}
  <Route location={location} path="/" exact component={Homepage}></Route>
  <Route location={location} path="/confirmation/:token" exact component={Confirmationpage}></Route>
  <GuestRoute location={location} path="/login" exact component={Loginpage}></GuestRoute>

  <GuestRoute location={location} path="/forgot-password" exact component={ForgottenPasswordpage}></GuestRoute>
  <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordpage}></GuestRoute>

  <GuestRoute location={location} path="/signup" exact component={Signuppage}></GuestRoute>
  <UserRoute location={location} path="/dashboard" exact component={Dashboardpage}></UserRoute>
  <UserRoute location={location} path="/books/new" exact component={NewBookpage}></UserRoute>

</div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
