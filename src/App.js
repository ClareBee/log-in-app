import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import Dashboardpage from './components/pages/Dashboardpage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


const App = ({location}) => <div className="ui container">
  <Route location={location} path="/" exact component={Homepage}></Route>
  <GuestRoute location={location} path="/login" exact component={Loginpage}></GuestRoute>
  <UserRoute location={location} path="/dashboard" exact component={Dashboardpage}></UserRoute>

</div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
