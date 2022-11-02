import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";
import { VIEW } from "./common/constants/uri";
import Home from "./pages/home/Home";

const RoutesStack = [
  { path: ROUTES.BASE, view: VIEW.DEFAULT, element: <Home />, name: VIEW.DEFAULT },
  { path: ROUTES.HOME, view: VIEW.HOME, element: <Home />, name: VIEW.HOME },
  { path: ROUTES.PEOPLE, view: VIEW.PEOPLE, element: <Home />, name: VIEW.PEOPLE },
  { path: ROUTES.PLANETS, view: VIEW.PLANETS, element: <Home />, name: VIEW.PLANETS },
  { path: ROUTES.STARSHIP, view: VIEW.STARSHIP, element: <Home />, name: VIEW.STARSHIP },
  { path: ROUTES.FILMS, view: VIEW.FILMS, element: <Home />, name: VIEW.FILMS },
  { path: ROUTES.VEHICLES, view: VIEW.VEHICLES, element: <Home />, name: VIEW.VEHICLES },
  { path: ROUTES.SPECIES, view: VIEW.SPECIES, element: <Home />, name: VIEW.SPECIES },
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

export { AppRouter, RoutesStack };
