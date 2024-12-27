import express, { ErrorRequestHandler } from "express";
import cors from "cors";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks";
import authsRouter from "./routes/auths";
import booksRouter from "./routes/books";

const app = express();

const corsOptions = {
  origin: "*", // Allow all origins for testing purposes
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use((_req, _res, next) => {
  console.log(
    "Time:",
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks", drinkRouter);
app.use("/auths", authsRouter);
app.use("/books", booksRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;