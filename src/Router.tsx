import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ROUTES } from "./common/constants";

const AppRouter = () => {

  const RoutesStack = [
    { path: ROUTES.HOME, element: <p>home</p> },
    { path: ROUTES.PEOPLE, element: <p>home</p> },
    { path: ROUTES.PLANETS, element: <p>home</p> },
    { path: ROUTES.PLANETS, element: <p>home</p> },
  ];


  return (
    <Router>
      <Routes>
        {RoutesStack.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export { AppRouter };
