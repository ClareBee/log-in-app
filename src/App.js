import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';
import Dashboardpage from './components/pages/Dashboardpage';


const App = () => <div className="ui container">
  <Route path="/" exact component={Homepage}></Route>
  <Route path="/login" exact component={Loginpage}></Route>
  <Route path="/dashboard" exact component={Dashboardpage}></Route>

</div>

export default App;
