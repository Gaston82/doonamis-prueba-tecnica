import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:id", element: <DetailsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
