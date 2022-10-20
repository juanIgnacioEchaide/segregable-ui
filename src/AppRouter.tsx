import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";
import { VIEW } from "./common/constants/uri";
import { QueryContext } from "./context/query/QueryProvider";
import Films from "./pages/films/Films";
import Home from "./pages/home/Home";
import People from "./pages/people/People";
import Planets from "./pages/planets/Planets";
import Species from "./pages/species/Species";
import Starship from "./pages/starship/Starship";
import Vehicles from "./pages/vehicles/Vehicles";

export const RoutesStack = [
  { path: ROUTES.BASE, view: VIEW.DEFAULT, element: <Home /> },
  { path: ROUTES.HOME, view: VIEW.HOME, element: <Home /> },
  { path: ROUTES.PEOPLE, view: VIEW.PEOPLE, element: <People /> },
  { path: ROUTES.PLANETS, view: VIEW.PLANETS, element: <Planets /> },
  { path: ROUTES.STARSHIP, view: VIEW.STARSHIP, element: <Starship /> },
  { path: ROUTES.FILMS, view: VIEW.FILMS, element: <Films /> },
  { path: ROUTES.VEHICLES, view: VIEW.VEHICLES, element: <Vehicles /> },
  { path: ROUTES.SPECIES, view: VIEW.SPECIES, element: <Species /> },
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
