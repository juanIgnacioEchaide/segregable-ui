import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./common/constants";


const AppRouter = () => {

  const RoutesStack = [
    { path: ROUTES.BASE, element: <p>HOME</p> },
    { path: ROUTES.HOME, element: <p>HOME</p> },
    { path: ROUTES.PEOPLE, element: <p>PEOPLE</p> },
    { path: ROUTES.PLANETS, element: <p>PLANETS</p> },
    { path: ROUTES.PLANETS, element: <p>PLANETS</p> },
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
