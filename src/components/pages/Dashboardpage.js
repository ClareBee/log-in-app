import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

//shorthand for destructuring isConfirmed from props
const Dashboardpage = ({ isConfirmed }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {books.length === 0 && <AddBookCallToAction />}
  </div>
);
Dashboardpage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}
function mapStateToProps(state){
  return {
    isConfirmed: !!state.user.confirmed,
    books:
  }
}
export default connect(mapStateToProps)(Dashboardpage);
