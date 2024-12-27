import path from "node:path";
import { Book, NewBook } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/books.json");

const defaultBooks: Book[] = [
  {
    id: 1,
    title: "Book Title 1",
    author: "Author 1",
    year: 2021,
    cover: "/src/assets/cover1.jpg",
  },
  {
    id: 2,
    title: "Book Title 2",
    author: "Author 2",
    year: 2022,
    cover: "",
  },
];

function readAllBooks(): Book[] {
  return parse(jsonDbPath, defaultBooks);
}

function readBookById(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  return books.find((book) => book.id === id);
}

function createBook(newBook: NewBook): Book {
  const books = parse(jsonDbPath, defaultBooks);
  const nextId = books.reduce((maxId, book) => (book.id > maxId ? book.id : maxId), 0) + 1;
  const createdBook = { id: nextId, ...newBook };
  books.push(createdBook);
  serialize(jsonDbPath, books);
  return createdBook;
}

function deleteBook(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return undefined;
  const deletedBooks = books.splice(index, 1);
  serialize(jsonDbPath, books);
  return deletedBooks[0];
}

function updateBook(id: number, updatedBook: Partial<NewBook>): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const book = books.find((book) => book.id === id);
  if (!book) return undefined;

  if (updatedBook.title !== undefined) book.title = updatedBook.title;
  if (updatedBook.author !== undefined) book.author = updatedBook.author;
  if (updatedBook.year !== undefined) book.year = updatedBook.year;
  if (updatedBook.cover !== undefined) book.cover = updatedBook.cover;

  serialize(jsonDbPath, books);
  return book;
}

export { readAllBooks, readBookById, createBook, deleteBook, updateBook };