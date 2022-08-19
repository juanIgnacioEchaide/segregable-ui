import { People, Planet, Starship } from "../common";
import { MESSAGE } from "../common/constants";
import { VIEW } from "../common/constants/uri";
import {
  ViewQueries,
  UpdatePayload,
  Action,
  Vehicle,
  Specie,
  Film,
} from "../common/models/entities";
import { BaseActions } from "../context/query/BaseActions";
import {
  getAllPeople,
  getPeopleByPage,
  searchPeople,
  getAllPlanets,
  getPlanetsById,
  getPlanetsByPage,
  searchPlanets,
  getAllStarships,
  getStarshipsByPage,
  getStarshipsById,
  getPeopleById,
  getAllFilms,
  getFilmsByPage,
  getFilmsById,
  searchFilms,
  getAllSpecies,
  getSpeciesByPage,
  getSpeciesById,
  getAllVehicles,
  getVehiclesByPage,
  getVehiclesById,
  searchStarship,
  searchSpecies,
  searchVehicles,
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
      searchQuery: (stringParam: string) => {
        return searchPeople(stringParam);
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
      searchQuery: (stringParam: string) => {
        return searchPlanets(stringParam);
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
      searchQuery: (stringParam: string) => {
        return searchStarship(stringParam);
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
      searchQuery: (stringParam: string) => {
        return searchFilms(stringParam);
      },
      updateFn: (data: UpdatePayload<Film>): Action => {
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
      searchQuery: (stringParam: string) => {
        return searchSpecies(stringParam);
      },
      updateFn: (data: UpdatePayload<Specie>): Action => {
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
      searchQuery: (stringParam: string) => {
        return searchVehicles(stringParam);
      },
      updateFn: (data: UpdatePayload<Vehicle>): Action => {
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

  const searchQuery = (viewScene: VIEW, stringParam: string) => {
    return queryByView[viewScene]?.searchQuery(stringParam);
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
    searchQuery,
    updateDispatch,
    displayGenericError,
    clearError,
    setView,
  };
};

export { UseQueryByView };
