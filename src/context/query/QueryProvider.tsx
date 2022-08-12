import React, {
  useEffect,
  createContext,
  useReducer,
  useState,
  useCallback,
} from "react";
import {
  defaultContextValue,
  defaultState,
} from "../../common/constants/context";
import { BaseReducer } from "./BaseReducer";
import { ContextValue, SwapiResponse } from "../../common/models/entities";
import { getAllPeople, getPeopleByPage } from "../../services";
import { BaseActions } from "./BaseActions";
import { getPageFromUri } from "../../common/utils/helpers";
import { MESSAGE, ROUTES } from "../../common/constants";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const value = { state, dispatch };

  const successHandler = (data: SwapiResponse<any>) => {
    // promise succeeded => dispatch to state
    if (data?.results.length) {
      // context state updated according to route
      return Promise.all([
        // set the previous page
        dispatch(BaseActions.SetPrevUri(data?.previous || "")),

        // set the next page to fetch
        dispatch(BaseActions.SetNextUri(data?.next || "")),

        // set the pages to be displayed at UI
        dispatch(
          BaseActions.UpdatePages({
            currentPage: getPageFromUri(data?.next) - 1,
            prevPage: getPageFromUri(data?.previous),
            nextPage: getPageFromUri(data?.next),
          })
        ),

        //populates people at state
        dispatch(BaseActions.UpdatePeople(data?.results)),

        //populates people to be displayed at UI
        dispatch(BaseActions.UpdateDisplayedPeople(data?.results)),
      ]);
    }
  };

  const getPeopleByParams = useCallback(() => {
    if (state?.view === ROUTES.PEOPLE && state?.pageParam !== 0) {
      return getAllPeople()
        .then((data) => successHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPeopleByPage(state?.pageParam)
        .then((data) => successHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
  }, [state?.view, state?.pageParam]);

  useEffect(() => {
    getPeopleByParams();
  }, [getPeopleByParams]);

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
