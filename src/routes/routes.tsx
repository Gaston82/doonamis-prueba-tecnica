import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shows from "../components/Shows/Shows";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Shows /> },
      { path: "details/:id", element: <DetailsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
