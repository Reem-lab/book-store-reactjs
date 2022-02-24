import { postBook, deleteBook, getBooks } from './booksApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOK = 'bookStore/books/LOAD_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const loadBook = (payload) => ({
  type: LOAD_BOOK,
  payload,
});

export const displayBooks = () => async (dispatch) => {
  const booksArr = await getBooks();
  const booksTemp = [];

  Object.keys(booksArr).forEach((id) => {
    booksTemp.push({
      item_id: id,
      title: booksArr[id][0].title,
      category: booksArr[id][0].category,
    });
  });

  dispatch(loadBook(booksTemp));
};

export const addNewBookApi = (newBook) => async (dispatch) => {
  await postBook(newBook);
  dispatch(addBook(newBook));
};

export const deleteBookApi = (bookID) => async (dispatch) => {
  await deleteBook(bookID);
  dispatch(removeBook(bookID));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);

    case LOAD_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default booksReducer;
