import { BaseState, ContextValue, Selectable, UIState } from "../models/entities";
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
    People = 'People',
    Planets = 'Planets',
    Starship = 'Starship',
    Vehicles = 'Vehicles',
    Species = 'Species',
    Films = 'Films',
    Search = 'Free search'
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

const defaultUIState: any = {
    modalOn: false,
    modalTitle: '',
    modalMessage: '',
    modalImage: '',
    type: '',
    loading: false,
    viewport: SIZE.DEFAULT,
    theme: {
        primary: {
            backgroundColor: '',
            fontColor: '',
            border: '',
            fontFamily: '',
            fontWeight: '',
        }
    }
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

const Selectables: Selectable[] = [
    { selected: false, entity: StateEntity.People, view: VIEW.PEOPLE, uri: ROUTES.PEOPLE },
    { selected: false, entity: StateEntity.Films, view: VIEW.FILMS, uri: ROUTES.FILMS },
    { selected: false, entity: StateEntity.Planets, view: VIEW.PLANETS, uri: ROUTES.PLANETS },
    { selected: false, entity: StateEntity.Species, view: VIEW.SPECIES, uri: ROUTES.SPECIES },
    { selected: false, entity: StateEntity.Starship, view: VIEW.STARSHIP, uri: ROUTES.STARSHIP },
    { selected: false, entity: StateEntity.Vehicles, view: VIEW.VEHICLES, uri: ROUTES.VEHICLES },
    { selected: false, entity: StateEntity.Search, view: VIEW.SEARCH, uri: ROUTES.SEARCH },
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