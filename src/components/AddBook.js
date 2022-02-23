import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

const CATEGORIES = ['romantic', 'hisorical', 'geographics', 'physics'];
const AddBook = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form
      className="wrapForm"
      onSubmit={submitBookToStore}
    >
      <h2 className="title">ADD NEW BOOK</h2>
      <div className="Lesson-Panel ">
        <input
          className="inputTitle"
          placeholder=" Book title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
