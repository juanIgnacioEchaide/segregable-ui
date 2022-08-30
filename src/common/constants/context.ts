import { BaseState, ContextValue, UIState } from "../models/entities";
import { SIZE } from "./media";
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
    Films = 'films',
    Search = 'search'
}

const ItemKinds = [
    StateEntity.People,
    StateEntity.Planets,
    StateEntity.Vehicles,
    StateEntity.Starship,
    StateEntity.Species,
    StateEntity.Films,
]

enum UIActionType {
    HideModal = 'HideModal',
    UpdateViewport = 'UpdateViewport',
    ShowWarning = 'ShowWarning',
    ShowSimpleDialogue = 'ShowSimpleDialogue',
    ShowStepperDialogue = 'ShowStepperDialogue',
}

enum ModalType {
    Default = '',
    Warning = 'Warning',
    SimpleDialogue = 'SimpleDialogue',
    StepperDialogue = 'SimpleDialogue'
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
    stringParam: '',
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
}

const defaultUIState: UIState = {
    modalOn: false,
    modalTitle: '',
    modalMessage: '',
    modalImage: '',
    type: '',
    viewport: SIZE.DEFAULT
}

const defaultUIContextValue: ContextValue<UIState> = {
    state: defaultUIState,
    dispatch: () => { }
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
    [ROUTES.FILMS]: VIEW.FILMS,
    [ROUTES.SEARCH]: VIEW.SEARCH
}

const Selectables = [
    { selected: false, entity: StateEntity.People, uri: ROUTES.PEOPLE },
    { selected: false, entity: StateEntity.Films, uri: ROUTES.FILMS },
    { selected: false, entity: StateEntity.Planets, uri: ROUTES.PLANETS },
    { selected: false, entity: StateEntity.Species, uri: ROUTES.SPECIES },
    { selected: false, entity: StateEntity.Starship, uri: ROUTES.STARSHIP },
    { selected: false, entity: StateEntity.Vehicles, uri: ROUTES.VEHICLES },
    { selected: false, entity: StateEntity.Search, uri: ROUTES.SEARCH },
];

const INITIAL_PAGE = 1

export {
    defaultState,
    defaultContextValue,
    defaultUIState,
    defaultUIContextValue,
    INITIAL_PAGE,
    ViewByLocation,
    ItemKinds,
    Selectables,
    StateEntity,
    ActionType,
    UIActionType,
    ModalType
}