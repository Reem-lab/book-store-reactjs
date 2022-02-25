import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBookApi } from '../redux/books/book';
import '../styles/AddBook.css';

const CATEGORIES = ['Economy', 'Action', 'Science Fiction'];
const AddBook = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addNewBookApi(newBook));
  };

  return (
    <form
      className="wrapForm"
      onSubmit={submitBookToStore}
    >
      <span className="addBookSpan">ADD NEW BOOK</span>
      <div className="inputs-selector">
        <input
          className="inputTitle"
          placeholder=" Book title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          required
          className="select-options"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="Rectangle-2" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddBook;
