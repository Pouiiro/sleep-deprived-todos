import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { Error } from "@/pages/error";
import { Home } from "@/pages/home";
import { List } from "@/pages/List";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <List />,
      },
    ],
  },
]);
