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
  BaseState,
  ContextValue,
  People,
  Planet,
  Starship,
  SwapiResponse,
} from "../../common/models/entities";
import { getLocationPath, setUpdatePayload } from "../../common/utils/helpers";
import { UseQueryByView } from "../../hooks/UseQueryByView";

const QueryContext = createContext<ContextValue<BaseState>>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const viewPath = getLocationPath();
  const value = { state, dispatch };

  const {
    allQuery,
    byPageQuery,
    byIdQuery,
    searchQuery,
    updateDispatch,
    displayGenericError,
    setView,
  } = UseQueryByView();

  const fetchDataByPage = useCallback(() => {
    if (state?.view) {
      if (state?.pageParam === 0) {
        allQuery(state?.view)
          .then((data: SwapiResponse<People | Planet | Starship>) => {
            const payload = setUpdatePayload(data);
            return dispatch(updateDispatch(state?.view, payload));
          })
          .catch((err) => dispatch(displayGenericError()));
      }

      if (state?.pageParam !== 0) {
        byPageQuery(state?.view, state?.pageParam)
          .then((data: SwapiResponse<People | Planet | Starship>) => {
            return dispatch(
              updateDispatch(state?.view, setUpdatePayload(data))
            );
          })
          .catch((err) => dispatch(displayGenericError()));
      }
      
      if (state?.idParam !== 0) {
        byIdQuery(state?.view, state?.pageParam)
          .then((data: SwapiResponse<People | Planet | Starship>) => {
            return dispatch(
              updateDispatch(state?.view, setUpdatePayload(data))
            );
          })
          .catch((err) => dispatch(displayGenericError()));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

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
