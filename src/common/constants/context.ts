import { BaseState } from "../models/entities";
import { ROUTES, VIEW } from "./uri";

enum ActionType {
    SetLoading = "setLoading",
    SetError = "SetError",
    SetView = "SetView",
    SetPrevUri = "SetPrevUri",
    SetNextUri = "SetNextUri",
    ClearError = "ClearError",
    UpdatePages = "UpdatePages",
    UpdatePeople = "UpdatePeople",
    UpdatePlanets = "UpdatePlanets",
    UpdateStarships = "UpdateStarships",
    UpdateFilms = "UpdateFilms",
    UpdateSpecies = "UpdateSpecies",
    UpdateVehicles = "UpdateVehicles",
    UpdateDisplayedStarships = "UpdateDisplayedStarships",
    UpdateDisplayedPeople = "UpdateDisplayedPeople",
    UpdateDisplayedPlanets = "UpdateDisplayedPlanets",
    UpdateDisplayedFilms = "UpdateFilms",
    UpdateDisplayedSpecies = "UpdateSpecies",
    UpdateDisplayedVehicles = "UpdateVehicles",
}

enum StateEntity {
    People = 'people',
    Planets = 'planets',
    Starship = 'starship',
    Vehicles = 'vehicles',
    Species = 'species',
    Films = 'films'
}

const defaultState: BaseState = {
    loading: false,
    error: false,
    errorMessage: '',
    currentPage: 0,
    nextPage: 0,
    prevPage: 0,
    nextUri: '',
    prevUri: '',
    view: VIEW.DEFAULT,
    pageParam: 0,
    idParam: 0,
    people: [],
    planets: [],
    starship: [],
    vehicles: [],
    species: [],
    films: [],
    displayed: {
        people: [],
        planets: [],
        starship: [],
        vehicles: [],
        species: [],
        films: [],
    },
    stringParam: ""
}

const defaultContextValue = {
    state: defaultState,
    dispatch: () => { }
}

const ViewByLocation: Record<ROUTES, VIEW> = {
    [ROUTES.DEFAULT]: VIEW.DEFAULT,
    [ROUTES.BASE]: VIEW.DEFAULT,
    [ROUTES.HOME]: VIEW.DEFAULT,
    [ROUTES.PEOPLE]: VIEW.PEOPLE,
    [ROUTES.PLANETS]: VIEW.PLANETS,
    [ROUTES.STARSHIP]: VIEW.STARSHIP,
    [ROUTES.VEHICLES]: VIEW.VEHICLES,
    [ROUTES.SPECIES]: VIEW.SPECIES,
    [ROUTES.FILMS]: VIEW.FILMS
}
const INITIAL_PAGE = 1


export {
    defaultState,
    defaultContextValue,
    INITIAL_PAGE,
    ViewByLocation,
    StateEntity,
    ActionType
}