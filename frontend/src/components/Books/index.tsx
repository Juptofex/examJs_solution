import React, { useEffect, useState } from 'react';
import { Book } from '../../../../backend/types';
import './Books.css';
import { useNavigate } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="books">
      {books.map(book => (
        <div key={book.id} className="book">
          <h2>{book.title}</h2>
          <button onClick={() => navigate(`/books/${book.id}`)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Books;