import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Loginpage from './components/pages/Loginpage';


const App = () => <div className="ui container">
  <Route path="/" exact component={Homepage}></Route>
  <Route path="/login" exact component={Loginpage}></Route>

</div>

export default App;
