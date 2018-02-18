import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };
//only suited for text input
  onChange = e =>
    this.setState({
      data: {
        //saves what's already there
        ...this.state.data,
        //adds input from user
      [e.target.name]: e.target.value
      }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors }); //if this object is empty, there aren't errors!
  }
  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be blank";

    return errors; //if errors object is empty, proceed
  }

  render(){
    const { data } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@example.com"
          value={data.email}
          onChange={this.onChange}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Make it secure"
          value={data.password}
          onChange={this.onChange}/>
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}
LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};
export default LoginForm;
