import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ROUTES } from "./common/constants";
import { VIEW } from "./common/constants/uri";
import { getViewByLocation } from "./common/utils/helpers";
import { BaseActions } from "./context/query/BaseActions";
import { QueryContext } from "./context/query/QueryProvider";

const AppRouter = () => {
  const location = useLocation();
  const { dispatch } = useContext(QueryContext);
  const RoutesStack = [
    { path: ROUTES.HOME, element: <p>home</p> },
    { path: ROUTES.PEOPLE, element: <p>home</p> },
    { path: ROUTES.PLANETS, element: <p>home</p> },
    { path: ROUTES.PLANETS, element: <p>home</p> },
  ];

  useEffect(() => {
    if (location) {
      dispatch(
        BaseActions.SetView(
          getViewByLocation(location.pathname as ROUTES) || VIEW.DEFAULT
        )
      );
    }
  }, [dispatch, location]);

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
