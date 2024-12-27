import { Router } from "express";
import { NewBook } from "../types";
import { createBook, deleteBook, readAllBooks, readBookById, updateBook } from "../services/books";
import { authorize, isAdmin } from "../utils/auths";

const router = Router();

router.get("/", (_req, res) => {
  const books = readAllBooks();
  return res.json(books);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = readBookById(id);
  if (!book) return res.sendStatus(404);
  return res.json(book);
});

router.post("/", authorize, isAdmin, (req, res) => {
  const body: unknown = req.body;
  if (!body || typeof body !== "object" || !("title" in body) || !("author" in body) || !("year" in body)) {
    return res.sendStatus(400);
  }

  const { title, author, year, cover } = body as NewBook;
  const newBook = createBook({ title, author, year, cover });
  return res.json(newBook);
});

router.delete("/:id", authorize, isAdmin, (req, res) => {
  const id = Number(req.params.id);
  const deletedBook = deleteBook(id);
  if (!deletedBook) return res.sendStatus(404);
  return res.json(deletedBook);
});

router.patch("/:id", authorize, isAdmin, (req, res) => {
  const id = Number(req.params.id);
  const body: unknown = req.body;

  if (!body || typeof body !== "object") {
    return res.sendStatus(400);
  }

  const updatedBook = updateBook(id, body as Partial<NewBook>);
  if (!updatedBook) return res.sendStatus(404);
  return res.json(updatedBook);
});

export default router;