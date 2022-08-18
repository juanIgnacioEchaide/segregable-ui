import { People, Planet, Starship } from "../common";
import { MESSAGE } from "../common/constants";
import { ROUTES, VIEW } from "../common/constants/uri";
import { ViewQueries, UpdatePayload, Action } from "../common/models/entities";
import { BaseActions } from "../context/query/BaseActions";
import {
  getAllPeople,
  getPeopleByPage,
  getAllPlanets,
  getAllStarships,
  getStarshipsByPage,
} from "../services";
import { getPlanetsByPage } from "../services/planet";

const UseQueryByView = () => {
  const queryByView: ViewQueries = {
    [VIEW.PEOPLE]: {
      allQuery: () => {
        console.log("getAllPeople");
        return getAllPeople();
      },
      byPageQuery: (page: number) => {
        return getPeopleByPage(page);
      },
      updateFn: (data: UpdatePayload<People>): Action => {
        return BaseActions.UpdatePeople(data) as Action;
      },
    },
    [VIEW.PLANETS]: {
      allQuery: () => {
        console.log("getAllPlanets");
        return getAllPlanets();
      },
      byPageQuery: (page: number) => {
        return getPlanetsByPage(page);
      },
      updateFn: (data: UpdatePayload<Planet>): Action => {
        return BaseActions.UpdatePlanets(data) as Action;
      },
    },
    [VIEW.STARSHIP]: {
      allQuery: () => {
        return getAllStarships();
      },
      byPageQuery: (page: number) => {
        return getStarshipsByPage(page);
      },
      updateFn: (data: UpdatePayload<Starship>): Action => {
        return BaseActions.UpdateStarships(data) as Action;
      },
    },
  };

  const allQuery = (viewScene: VIEW) => {
    return queryByView[viewScene]?.allQuery();
  };

  const byPageQuery = (viewScene: VIEW, page: number) => {
    return queryByView[viewScene]?.byPageQuery(page);
  };

  // TO BE DISPATCHED
  const updateDispatch = (
    viewScene: VIEW,
    data: UpdatePayload<People | Planet | Starship>
  ) => {
    return queryByView[viewScene]?.updateFn(data) as Action;
  };

  const displayGenericError = () => {
    return BaseActions.SetError(MESSAGE.GENERIC_API_ERROR);
  };

  const clearError = () => {
    return BaseActions.ClearError();
  };

  const setView = (view: VIEW) => {
    return BaseActions.SetView(view);
  };

  return {
    queryByView,
    allQuery,
    byPageQuery,
    updateDispatch,
    displayGenericError,
    clearError,
    setView,
  };
};

export { UseQueryByView };
