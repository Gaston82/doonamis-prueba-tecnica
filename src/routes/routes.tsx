import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shows from "../components/Shows/Shows";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Shows /> }],
  },
];

export const router = createBrowserRouter(routes);
