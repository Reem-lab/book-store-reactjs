import { useState } from 'react';

const CATEGORIES = ['romantic', 'hisorical', 'geographics', 'physics'];
const AddBook = () => {
  const [category, setCategory] = useState('');

  return (
    <form
      className="wrapForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="title">
        ADD NEW BOOK
      </h2>
      <div className="Lesson-Panel ">
        <input className="inputTitle" placeholder=" Book title" />
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onBlur={(e) => setCategory(e.target.value)}
        >
          {
                   CATEGORIES.map((category) => (
                     <option value={category} key={category}>
                       {category}
                     </option>
                   ))
               }
        </select>
      </div>
      <button type="button">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
