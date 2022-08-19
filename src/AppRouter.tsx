import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";
import Films from "./pages/films/Films";
import Home from "./pages/home/Home";
import People from "./pages/people/People";
import Planets from "./pages/planets/Planets";
import Species from "./pages/species/Species";
import Starship from "./pages/starship/Starship";
import Vehicles from "./pages/vehicles/Vehicles";


const AppRouter = () => {

  const RoutesStack = [
    { path: ROUTES.BASE, element: <Home/> },
    { path: ROUTES.HOME, element: <Home/> },
    { path: ROUTES.PEOPLE, element: <People/> },
    { path: ROUTES.PLANETS, element: <Planets/> },
    { path: ROUTES.STARSHIP, element: <Starship/> },
    { path: ROUTES.FILMS, element: <Films/> },
    { path: ROUTES.VEHICLES, element: <Vehicles/> },
    { path: ROUTES.SPECIES, element: <Species/> },
  ];

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
