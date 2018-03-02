import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCallToAction from '../ctas/AddBookCallToAction';

//shorthand for destructuring isConfirmed from props
const Dashboardpage = ({ isConfirmed, books }) => (
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
    books: allBooksSelector(state)
  }
}
export default connect(mapStateToProps)(Dashboardpage);
