import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class SearchBookForm extends React.Component {
  state = {
    query: '',
    loading: false,
    options: [{
      key: 1,
      value: 1,
      text: 'some book'
    },
    {
      key: 2,
      value: 2,
      text: 'another book'
    }],
    books: {}
  }
  fetchOptions = () => {
    if(!this.state.query) return;
    this.setState({
      loading: true
    });
    axios.get(`/api/books/search?q=${this.state.query}`)
    .then(res => res.data.books)
    .then(books => {
      const options = [];
      const booksHash = {};
      books.forEach(book => {
        booksHash[book.goodreadsId] = book;
        options.push({
          key: book.goodreadsId,
          value: book.goodreadsId,
          text: book.title
        })
      })
    })
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  }

  render(){
    return(
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for book by title"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loadin} />
      </Form>
    )
  }
}
export default SearchBookForm;
