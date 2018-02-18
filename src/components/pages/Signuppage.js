import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signupform from '../forms/Signupform';
import { signup } from '../../actions/users';


class Signuppage extends React.Component {
  submit = (data) => this.props.signup(data).then(() => this.props.history.push('/dashboard'));
  render(){
    return(
      <div>
        <Signupform submit={this.submit}/>
      </div>
    )
  }
}
Signuppage.propTypes = {
  //use shape for objects
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}
//doesn't need anything from state, but does need signup function
export default connect(null, { signup })(Signuppage);
