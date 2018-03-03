import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import { createBook } from "../../actions/books";


class NewBookpage extends React.Component {
  state = {
    book: null
  }

  onBookSelect = (book) => {
    this.setState({book});
    axios.get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({book: {...book, pages}}));
  }

  addBook = book => {
    this.props
      .createBook(book)
      .then(() => this.props.history.push("/dashboard"));
  }

  render() {
    return(
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect}/>
        {this.state.book && <BookForm submit={this.addBook} book={this.state.book}/>}
      </Segment>
    );
  }
}

NewBookpage.propTypes = {
  createBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createBook })(NewBookpage);
