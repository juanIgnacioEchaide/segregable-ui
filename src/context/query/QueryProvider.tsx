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
  UpdatePayload,
  ViewQueries,
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
import { MESSAGE } from "../../common/constants";
import { getPlanetsByPage } from "../../services/planet";
import { VIEW } from "../../common/constants/uri";

const QueryContext = createContext<ContextValue>(defaultContextValue);

const QueryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BaseReducer, defaultState);
  const value = { state, dispatch };

  const matchQueryByView: ViewQueries = {
    [VIEW.PEOPLE]: {
      allQuery: () => {
        console.log('getAllPeople')
        return getAllPeople();
      },
      byPageQuery: (page: number) => {
        return getPeopleByPage(page);
      },
      updateFn: (data: UpdatePayload<People>) => {
        dispatch(BaseActions.UpdatePeople(data));
      },
    },
    [VIEW.PLANETS]: {
      allQuery: () => {
        console.log('getAllPlanets')
        return getAllPlanets();
      },
      byPageQuery: (page: number) => {
        return getPlanetsByPage(page);
      },
      updateFn: (data: UpdatePayload<Planet>) => {
        dispatch(BaseActions.UpdatePlanets(data));
      },
    },
    [VIEW.STARSHIP]: {
      allQuery: () => {
        return getAllStarships();
      },
      byPageQuery: (page: number) => {
        return getStarshipsByPage(page);
      },
      updateFn: (data: UpdatePayload<Starship>) => {
        dispatch(BaseActions.UpdateStarships(data));
      },
    },
  };

  const allQuery = (viewScene: VIEW) => {
    return matchQueryByView[viewScene].allQuery();
  };

  const byPageQuery = (viewScene: VIEW, page: number) => {
    return matchQueryByView[viewScene]?.byPageQuery(page);
  };

  const updateDispatch = (
    viewScene: VIEW,
    data: UpdatePayload<People | Planet | Starship>
  ) => {
    return matchQueryByView[viewScene]?.updateFn(data);
  };

  const displayGenericError = () => {
    return dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
  };

  const fetchByPageParam = useCallback((view: VIEW, pageParam: number) => {
    if (pageParam) {
      allQuery(view)
        .then((data: SwapiResponse<People | Planet | Starship>) => {
          return updateDispatch(view, setUpdatePayload(data));
        })
        .catch((err) => displayGenericError());
    } else {
      byPageQuery(view, pageParam)
        .then((data: any) => {
          return updateDispatch(view, setUpdatePayload(data));
        })
        .catch((err) => displayGenericError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.view, state?.pageParam]);

  useEffect(() => {
    fetchByPageParam(state?.view, state?.pageParam);
  }, [fetchByPageParam, state?.pageParam, state?.view]);

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
