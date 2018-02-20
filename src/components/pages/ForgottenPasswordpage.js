import React from 'react';
import { Message } from 'semantic-ui-react';
import ForgottenPasswordform from '../forms/ForgottenPasswordform'

class ForgottenPasswordpage extends React.Component {
  state = {
    success: false
  }

  submit = (data) =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({success: true}));

  render(){
    return(
      <div>
        {this.success.success ? <Message>Email has been sent </Message> : <ForgottenPasswordform submit={this.submit}/> }
      </div>
    )
  }
}

export default ForgottenPasswordpage;
