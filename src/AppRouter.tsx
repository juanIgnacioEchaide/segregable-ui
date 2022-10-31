import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";
import { VIEW } from "./common/constants/uri";
import Home from "./pages/home/Home";

export const RoutesStack = [
  { path: ROUTES.BASE, view: VIEW.DEFAULT, element: <Home /> },
  { path: ROUTES.HOME, view: VIEW.HOME, element: <Home /> },
  { path: ROUTES.PEOPLE, view: VIEW.PEOPLE, element: <Home /> },
  { path: ROUTES.PLANETS, view: VIEW.PLANETS, element: <Home /> },
  { path: ROUTES.STARSHIP, view: VIEW.STARSHIP, element: <Home /> },
  { path: ROUTES.FILMS, view: VIEW.FILMS, element: <Home /> },
  { path: ROUTES.VEHICLES, view: VIEW.VEHICLES, element: <Home /> },
  { path: ROUTES.SPECIES, view: VIEW.SPECIES, element: <Home /> },
];

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {RoutesStack.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </Router>
  );
};

export { AppRouter };
