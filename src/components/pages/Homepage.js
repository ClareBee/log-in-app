import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//isAuthenticated deconstructed here from props
const Homepage = ({isAuthenticated}) => (
  <div>
    <h1>Homepage</h1>
    {isAuthenticated ? <button>Logout</button> : <Link to="/login">Login</Link>}
  </div>
);
Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}
function mapStateToProps(state){
  return {
    //!! syntax creates boolean
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps)Homepage;
