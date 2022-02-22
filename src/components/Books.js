import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      category: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      category: 'Science Fiction',
      name: 'Dune',
      author: 'Frank Herbert',
    },
    {
      category: 'Economy',
      name: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={uuidv4} className="lesson-Panel">
              <span className="School-of">{book.category}</span>
              <li key={uuidv4()} className="li-books">{book.name}</li>
              <span className="Suzanne-Collins">{book.author}</span>
            </div>
          ))}
        </ul>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
