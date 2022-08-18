import { People, Planet, Starship } from "../common";
import { MESSAGE } from "../common/constants";
import { VIEW } from "../common/constants/uri";
import { ViewQueries, UpdatePayload, Action } from "../common/models/entities";
import { BaseActions } from "../context/query/BaseActions";
import {
  getAllPeople,
  getPeopleByPage,
  getAllPlanets,
  getPlanetsById,
  getPlanetsByPage,
  getAllStarships,
  getStarshipsByPage,
  getStarshipsById,
  getPeopleById,
  getAllFilms,
  getFilmsByPage,
  getFilmsById,
  getAllSpecies,
  getSpeciesByPage,
  getSpeciesById,
  getAllVehicles,
  getVehiclesByPage,
  getVehiclesById,
} from "../services";

const UseQueryByView = () => {
  const queryByView: ViewQueries = {
    [VIEW.PEOPLE]: {
      allQuery: () => {
        return getAllPeople();
      },
      byPageQuery: (page: number) => {
        return getPeopleByPage(page);
      },
      byIdQuery: (id: number) => {
        return getPeopleById(id);
      },
      updateFn: (data: UpdatePayload<People>): Action => {
        return BaseActions.UpdatePeople(data) as Action;
      },
    },
    [VIEW.PLANETS]: {
      allQuery: () => {
        return getAllPlanets();
      },
      byPageQuery: (page: number) => {
        return getPlanetsByPage(page);
      },
      byIdQuery: (id: number) => {
        return getPlanetsById(id);
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
      byIdQuery: (id: number) => {
        return getStarshipsById(id);
      },
      updateFn: (data: UpdatePayload<Starship>): Action => {
        return BaseActions.UpdateStarships(data) as Action;
      },
    },
    [VIEW.FILMS]: {
      allQuery: () => {
        return getAllFilms();
      },
      byPageQuery: (page: number) => {
        return getFilmsByPage(page);
      },
      byIdQuery: (id: number) => {
        return getFilmsById(id);
      },
      updateFn: (data: UpdatePayload<Starship>): Action => {
        return BaseActions.UpdateFilms(data) as Action;
      },
    },
    [VIEW.SPECIES]: {
      allQuery: () => {
        return getAllSpecies();
      },
      byPageQuery: (page: number) => {
        return getSpeciesByPage(page);
      },
      byIdQuery: (id: number) => {
        return getSpeciesById(id);
      },
      updateFn: (data: UpdatePayload<Starship>): Action => {
        return BaseActions.UpdateSpecies(data) as Action;
      },
    },
    [VIEW.VEHICLES]: {
      allQuery: () => {
        return getAllVehicles();
      },
      byPageQuery: (page: number) => {
        return getVehiclesByPage(page);
      },
      byIdQuery: (id: number) => {
        return getVehiclesById(id);
      },
      updateFn: (data: UpdatePayload<Starship>): Action => {
        return BaseActions.UpdateVehicles(data) as Action;
      },
    },
  };

  const allQuery = (viewScene: VIEW) => {
    return queryByView[viewScene]?.allQuery();
  };

  const byPageQuery = (viewScene: VIEW, page: number) => {
    return queryByView[viewScene]?.byPageQuery(page);
  };

  const byIdQuery = (viewScene: VIEW, id: number) => {
    return queryByView[viewScene]?.byIdQuery(id);
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
    byIdQuery,
    updateDispatch,
    displayGenericError,
    clearError,
    setView,
  };
};

export { UseQueryByView };
