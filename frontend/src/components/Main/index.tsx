import { createBrowserRouter } from "react-router-dom";
import App, { Home } from "../App";
import Books from "../Books";
import Book from "../Book";
import Login from "../Login";
import Welcome from "../WelcomeMsg";
import PrivateRoute from "../PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Login />
      </App>
    ),
  },
  {
    path: "/welcome",
    element: (
      <PrivateRoute>
        <App>
          <Welcome />
        </App>
      </PrivateRoute>
    ),
  },
  {
    path: "/books",
    element: (
      <PrivateRoute>
        <App>
          <Books />
        </App>
      </PrivateRoute>
    ),
  },
  {
    path: "/books/:id",
    element: (
      <PrivateRoute>
        <App>
          <Book />
        </App>
      </PrivateRoute>
    ),
  },
]);

export default router;