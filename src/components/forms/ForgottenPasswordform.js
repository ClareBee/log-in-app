import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import isEmail from 'validator/lib/isEmail';

class ForgottenPasswordform extends React.Component {
  state = {
    data: {
      email: ''
    },
    loading: false,
    errors: {}
  }
  onChange = e =>
    this.setState({
      ...this.state,
      data: {...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = e =>
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors, loading: false })
    );
  }
  validate = data => {
    const errors = {};
    if(!isEmail(data.email) errors.email = 'Invalid email';
    return errors;
  }

  render(){
    const { errors, data, loading } = this.state;
    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor=email>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value="data.email"
            onChange={this.onChange}/>
            {errors.email && <InlineError text={errors.email}}
        <Button primary>ForgottenPasswordForm</Button>
      </Form>
    )
  }
}
ForgottenPasswordform.propTypes = {
  submit: PropType.func.isRequired
};

export default ForgottenPasswordform;
