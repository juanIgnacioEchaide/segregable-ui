import { People, Planet, Starship } from "../../common";
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
} from "../../services";
import { VIEW } from "../../common/constants/uri";
import {
  ViewQueries,
  UpdatePayload,
  Action,
  Vehicle,
  Specie,
  Film,
} from "../../common/models/entities";
import { QueryActions } from "../../context/query/QueryActions";

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
        console.log("llega a queryByView");
        return searchPeople(stringParam);
      },
      updateFn: (data: UpdatePayload<People>): Action => {
        return QueryActions.UpdatePeople(data) as Action;
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
        return QueryActions.UpdatePlanets(data) as Action;
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
        return QueryActions.UpdateStarships(data) as Action;
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
        return QueryActions.UpdateFilms(data) as Action;
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
        return QueryActions.UpdateSpecies(data) as Action;
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
        return QueryActions.UpdateVehicles(data) as Action;
      },
    },
  };

  export { queryByView }