import type { PathRouteProps } from "react-router-dom";

import Connect from "lib/pages/connect";
import Home from "lib/pages/home";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
