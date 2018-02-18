import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import Dashboardpage from './components/pages/Dashboardpage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


const App = () => <div className="ui container">
  <Route path="/" exact component={Homepage}></Route>
  <GuestRoute path="/login" exact component={Loginpage}></GuestRoute>
  <UserRoute path="/dashboard" exact component={Dashboardpage}></UserRoute>

</div>

export default App;
