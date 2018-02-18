import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
//isAuthenticated deconstructed here from props
const Homepage = ({isAuthenticated, logout}) => (
  <div>
    <h1>Homepage</h1>
    {isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link>}
  </div>
);
Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
function mapStateToProps(state){
  return {
    //!! syntax creates boolean
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps, { logout })(Homepage);
