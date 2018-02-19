import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { confirm } from '../../actions/auth';
import { connect } from 'react-redux';

class Confirmationpage extends React.Component {
  state = {
    loading: true,
    success: false
  }
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.match.params.token)
    this.props
    .confirm(this.props.match.params.token)
    .then(() => this.setState({
      loading: false,
      success: true
    }))
    .catch(() => this.setState({
      loading: false,
      success: false
    }))
  }
  render(){
    const { loading, success } = this.state;
    return(
      <div>
        {loading && <Message icon>
        <Icon name="circle notched" loading />
          <Message.Header>Validating your email</Message.Header>
        </Message>}
        {!loading && success && <Message success icon>
        <Icon name="checkmark" />
          <Message.Content>
          <Message.Header>Thank you for validating your email</Message.Header>
          <Link to="/dashboard">Go to your dashboard</Link>
        </Message.Content>
        </Message>}
        {!loading && !success && <Message negative icon>
        <Icon name="warning sign" />
          <Message.Content>
          <Message.Header>Oops, invalid token</Message.Header>
        </Message.Content>
        </Message>}
      </div>
    )
  }
}

Confirmationpage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, { confirm })(Confirmationpage);
