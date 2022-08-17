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
import { setUpdatePayload } from "../../common/utils/helpers";
import { VIEW } from "../../common/constants/uri";
import { UseQueryByView } from "../../hooks/UseQueryByView";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const value = { state, dispatch };

  const {
    allQuery,
    byPageQuery,
    updateDispatch,
    displayGenericError,
  } = UseQueryByView();

  
  const fetchDataByPage = useCallback((view: VIEW, pageParam: number) => {
    if (pageParam !== 0) {
      allQuery(view)
        .then((data: SwapiResponse<People | Planet | Starship>) => {
          return updateDispatch(view, setUpdatePayload(data));
        })
        .catch((err) => displayGenericError());
    } else {
      byPageQuery(view, pageParam)
        .then((data: SwapiResponse<People | Planet | Starship>) => {
          return updateDispatch(view, setUpdatePayload(data));
        })
        .catch((err) => displayGenericError());
    }
  },[allQuery, byPageQuery, displayGenericError, updateDispatch]);

  useEffect(() => {
    fetchDataByPage(state?.view, state?.pageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.pageParam, state?.view]);

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
