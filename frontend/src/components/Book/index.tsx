import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../../../../backend/types';
import './Book.css';
import coverImage from '../../assets/cover.jpg';

const book = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <img src={book.cover || coverImage} alt={book.title} />
    </div>
  );
};

export default book;