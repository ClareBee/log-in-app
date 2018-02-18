import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import Dashboardpage from './components/pages/Dashboardpage';
import Signuppage from './components/pages/Signuppage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


const App = ({location}) => <div className="ui container">
  <Route location={location} path="/" exact component={Homepage}></Route>
  <GuestRoute location={location} path="/login" exact component={Loginpage}></GuestRoute>
  <GuestRoute location={location} path="/signup" exact component={Signuppage}></GuestRoute>
  <UserRoute location={location} path="/dashboard" exact component={Dashboardpage}></UserRoute>

</div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
