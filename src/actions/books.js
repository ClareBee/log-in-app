import { normalize } from "normalizr";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";
import api from "../api";
import { bookSchema } from "../schemas";

export const createBook = data => dispatch =>
  api.books
    .create(data)
    .then(book => dispatch(bookCreated(normalize(book, bookSchema))));

const bookCreated = data => ({
  type: BOOK_CREATED,
  data
});
