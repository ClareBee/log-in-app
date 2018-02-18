import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class Loginpage extends React.Component {
  submit = (data) => {
    console.log(data);
  };

  render(){
    return(
      <div>
        <h1>Log in page </h1>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
};

export default Loginpage;
