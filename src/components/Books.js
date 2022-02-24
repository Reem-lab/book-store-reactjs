import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookApi, displayBooks } from '../redux/books/book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={book.item_id} className="lesson-Panel">
              <span className="School-of">{book.category}</span>
              <li className="li-books">{book.title}</li>
              <div>
                <button type="button" className="remove-btn" onClick={() => dispatch(deleteBookApi(book.item_id))}>Remove</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
