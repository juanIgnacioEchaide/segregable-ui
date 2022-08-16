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
  UpdatePayload,
} from "../../common/models/entities";
import {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
  getPeopleByPage,
  getStarshipsByPage,
} from "../../services";
import { BaseActions } from "./BaseActions";
import { setUpdatePayload } from "../../common/utils/helpers";
import { MESSAGE, ROUTES } from "../../common/constants";
import { getPlanetsByPage } from "../../services/planet";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const value = { state, dispatch };

//////////// fetch people data
  const getPeopleByParams = useCallback(() => {
    dispatch(BaseActions.SetLoading(true));
    if (state?.view === ROUTES.PEOPLE && state?.pageParam === 0) {
      return getAllPeople()
        .then((data) =>
          dispatch(
            BaseActions.UpdatePeople(
              setUpdatePayload(data) as UpdatePayload<People>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPeopleByPage(state?.pageParam)
        .then((data) =>
          dispatch(
            BaseActions.UpdatePeople(
              setUpdatePayload(data) as UpdatePayload<People>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

//////////// fetch planets data
  const getPlanetsByParams = useCallback(() => {
    dispatch(BaseActions.SetLoading(true));
    if (state?.view === ROUTES.PLANETS && state?.pageParam === 0) {
      return getAllPlanets()
        .then((data) =>
          dispatch(
            BaseActions.UpdatePlanets(
              setUpdatePayload(data) as UpdatePayload<Planet>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getPlanetsByPage(state?.pageParam)
        .then((data) =>
          dispatch(
            BaseActions.UpdatePlanets(
              setUpdatePayload(data) as UpdatePayload<Planet>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

//////////// fetch starships data
  const getStarshipByParams = useCallback(() => {
    dispatch(BaseActions.SetLoading(true));
    if (state?.view === ROUTES.STARSHIP && state?.pageParam === 0) {
      return getAllStarships()
        .then((data) =>
          dispatch(
            BaseActions.UpdateStarships(
              setUpdatePayload(data) as UpdatePayload<Starship>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    } else {
      return getStarshipsByPage(state?.pageParam)
        .then((data) =>
          dispatch(
            BaseActions.UpdateStarships(
              setUpdatePayload(data) as UpdatePayload<Starship>
            )
          )
        )
        .catch((err: any) => {
          //set error to be displayed at UI
          dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  useEffect(() => {
    getPeopleByParams();
    getPlanetsByParams();
    getStarshipByParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
