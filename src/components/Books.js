import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={uuidv4} className="lesson-Panel">
              <span className="School-of">{book.category}</span>
              <li className="li-books">{book.title}</li>
              <div>
                <button type="button" className="remove-btn" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
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
