import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';

class Loginpage extends React.Component {
  //thunk action returns promise - if all ok redirects to home page
  //this.props.history provided by Router
  submit = data => this.props.login(data).then(() => this.props.history.push("/"));

  render(){
    return(
      <div>
        <h1>Log in page </h1>
        <LoginForm submit={this.submit}/>

        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    );
  }
};

Loginpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}
//usu connect's 1st param = mapStateToProps allows you to pass things from state into this component
//connect's 2nd param = dispatchToProps wraps functions to make them callable = { login } is shorthand
export default connect(null, { login })(Loginpage);
