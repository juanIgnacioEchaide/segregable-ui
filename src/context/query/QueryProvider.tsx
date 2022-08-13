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
import { ContextValue } from "../../common/models/entities";
import { getAllPeople, getAllPlanets, getPeopleByPage } from "../../services";
import { BaseActions } from "./BaseActions";
import { MESSAGE, ROUTES } from "../../common/constants";
import { peopleSuccessHandler, planetsSuccessHandler, starShipSuccessHandler } from "./helpers";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const value = { state, dispatch };

  const getPeopleByParams = useCallback(() => {
    if (state?.view === ROUTES.PEOPLE && state?.pageParam !== 0) {
      return getAllPeople()
        .then((data) => peopleSuccessHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPeopleByPage(state?.pageParam)
        .then((data) => peopleSuccessHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  const getPlanetsByParams = useCallback(() => {
    if (state?.view === ROUTES.PEOPLE && state?.pageParam !== 0) {
      return getAllPlanets()
        .then((data) => planetsSuccessHandler(data as any))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPeopleByPage(state?.pageParam)
        .then((data) => planetsSuccessHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  const getStarShipByParams = useCallback(() => {
    if (state?.view === ROUTES.PEOPLE && state?.pageParam !== 0) {
      return getAllPlanets()
        .then((data) => starShipSuccessHandler(data as any))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPeopleByPage(state?.pageParam)
        .then((data) => starShipSuccessHandler(data))
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  /*TODO 
  getPlanetsByParams
  planetSuccessHandler
  getStarshipByParams
  starshipSuccessHandler  
  */

  useEffect(() => {
    getPeopleByParams();
    getPlanetsByParams();
    getStarShipByParams();
  }, [getPeopleByParams, getPlanetsByParams, getStarShipByParams]);

  /* useEffect 
    page!== 0 && 
  */

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
