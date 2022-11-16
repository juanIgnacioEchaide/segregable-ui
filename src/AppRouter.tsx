import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";
import { VIEW } from "./common/constants/uri";
import Page from "./pages/page";

const RoutesStack = [
  { path: ROUTES.BASE, view: VIEW.DEFAULT, name: VIEW.DEFAULT },
  { path: ROUTES.HOME, view: VIEW.HOME, name: VIEW.HOME },
  { path: ROUTES.PEOPLE, view: VIEW.PEOPLE, name: VIEW.PEOPLE },
  { path: ROUTES.PLANETS, view: VIEW.PLANETS, name: VIEW.PLANETS },
  { path: ROUTES.STARSHIP, view: VIEW.STARSHIP, name: VIEW.STARSHIP },
  { path: ROUTES.FILMS, view: VIEW.FILMS, name: VIEW.FILMS },
  { path: ROUTES.VEHICLES, view: VIEW.VEHICLES, name: VIEW.VEHICLES },
  { path: ROUTES.SPECIES, view: VIEW.SPECIES, name: VIEW.SPECIES },
];

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {RoutesStack.map((route) => (
          <Route path={route.path} element={<Page/>} key={route.path} />
        ))}
      </Routes>
    </Router>
  );
};

export { AppRouter, RoutesStack };
