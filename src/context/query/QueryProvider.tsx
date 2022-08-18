import React, {
  useEffect,
  createContext,
  useReducer,
  useCallback,
} from "react";
import {
  defaultContextValue,
  defaultState,
} from "../../common/constants/context";
import { BaseReducer } from "./BaseReducer";
import {
  ContextValue,
  People,
  Planet,
  Starship,
  SwapiResponse,
} from "../../common/models/entities";
import {
  getLocationPath,
  setUpdatePayload,
  validView,
} from "../../common/utils/helpers";
import { UseQueryByView } from "../../hooks/UseQueryByView";
import { VIEW } from "../../common/constants/uri";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const viewPath = getLocationPath();
  const value = { state, dispatch };

  const {
    allQuery,
    byPageQuery,
    updateDispatch,
    displayGenericError,
    setView,
  } = UseQueryByView();

  const fetchDataByPage = () => {
    if (state?.view) {
      if (state?.pageParam === 0) {
        allQuery(state?.view)
          .then((data: SwapiResponse<People | Planet | Starship>) => {
            const payload = setUpdatePayload(data);
            return dispatch(updateDispatch(state?.view, payload));
          })
          .catch((err) => dispatch(displayGenericError()));
      } else {
        byPageQuery(state?.view, state?.pageParam)
          .then((data: SwapiResponse<People | Planet | Starship>) => {
            return updateDispatch(state?.view, setUpdatePayload(data));
          })
          .catch((err) => dispatch(displayGenericError()));
      }
    }
  };

  useEffect(() => {
    if (viewPath) dispatch(setView(viewPath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPath]);

  useEffect(() => {
    fetchDataByPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
