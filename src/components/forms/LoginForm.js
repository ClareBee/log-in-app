import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    data: {},
    loading: false,
    errors: {}
  }

  render(){
    return(
      <Form>
        <Button primary>Login</Button>
      </Form>
    );
  }
}
export default LoginForm;
