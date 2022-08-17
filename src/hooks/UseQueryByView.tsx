import { People, Planet, Starship } from "../common";
import { MESSAGE } from "../common/constants";
import { VIEW } from "../common/constants/uri";
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
      updateFn:
        (data: UpdatePayload<People>) => (dispatch: React.Dispatch<Action>) => {
          dispatch(BaseActions.UpdatePeople(data));
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
      updateFn:
        (data: UpdatePayload<Planet>) => (dispatch: React.Dispatch<Action>) => {
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
      updateFn:
        (data: UpdatePayload<Starship>) =>
        (dispatch: React.Dispatch<Action>) => {
          dispatch(BaseActions.UpdateStarships(data));
        },
    },
  };

  const allQuery = (viewScene: VIEW) => {
    return queryByView[viewScene].allQuery();
  };

  const byPageQuery = (viewScene: VIEW, page: number) => {
    return queryByView[viewScene]?.byPageQuery(page);
  };

  const updateDispatch = (
    viewScene: VIEW,
    data: UpdatePayload<People | Planet | Starship>
  ) => {
    return queryByView[viewScene]?.updateFn(data);
  };

  const displayGenericError = () => (dispatch: React.Dispatch<Action>) => {
    return dispatch(BaseActions.SetError(MESSAGE.GENERIC_API_ERROR));
  };

  return {
    queryByView,
    allQuery,
    byPageQuery,
    updateDispatch,
    displayGenericError
  };
};

export { UseQueryByView };
