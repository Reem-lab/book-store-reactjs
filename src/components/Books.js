import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookApi, displayBooks } from '../redux/books/book';
import 'react-circular-progressbar/dist/styles.css';
import AddBook from './AddBook';
import '../styles/Books.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const percentage = 66;

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="panel-bg">

      <div className="Lesson-Panel">

        {!books.length ? (
          <div className="heading">No Books Found ❗❕</div>
        ) : (
          books.map((book) => (
            <div key={book.item_id} className="panel">

              <div>
                <div className="book-name">
                  <span className="School-of">{book.category}</span>
                  <span className="book-title">{book.title}</span>
                </div>

                <div className="comment-div">
                  <span className="Comments">
                    Comments
                  </span>
                  <span className="line-2" />
                  <button type="button" className="Remove" onClick={() => dispatch(deleteBookApi(book.item_id))}>Remove</button>
                  <span className="line-2" />
                  <span className="Edit">
                    Edit
                  </span>
                </div>
              </div>

              <div className="spinner">

                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar value={percentage} />
                </div>
                <div className="percentage">
                  <span className="Percent-Complete">
                    64%
                  </span>
                  <span className="Completed Text-Style-2">
                    Completed
                  </span>
                </div>
              </div>

              <div className="info-book">
                <span className="Current-Chapter">
                  CURRENT CHAPTER
                </span>
                <span className="Current-Lesson">
                  Chapter 17
                </span>
                <div className="Rectangle-2">
                  <span className="Update-progress">
                    UPDATE PROGRESS
                  </span>
                </div>
              </div>

            </div>
          )))}
      </div>

      <div className="form">
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
