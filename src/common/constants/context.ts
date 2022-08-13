import { BaseState } from "../models/entities";
import { ROUTES } from "./uri";

enum ActionType {
    SetLoading = "setLoading",
    SetError = "SetError",
    SetPrevUri = "SetPrevUri",
    SetNextUri = "SetNextUri",
    ClearError = "ClearError",
    UpdatePages = "UpdatePages",
    UpdatePeople = "UpdatePeople",
    UpdatePlanets = "UpdatePlanets",
    UpdateStarships = "UpdateStarships",
    UpdateDisplayedPeople = "UpdateDisplayedPeople",
    UpdateDisplayedPlanets = "UpdateDisplayedPlanets",
    UpdateDisplayedStarships = "UpdateDisplayedStarships",
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
    view: ROUTES.DEFAULT,
    pageParam: 0,
    idParam: 0,
    people: [],
    planets: [],
    starship: [],
    displayed: {
        people: [],
        planets: [],
        starship: [],
    }
}

const defaultContextValue = {
    state: defaultState,
    dispatch: () => { }
}

const INITIAL_PAGE = 1

const dataLoaded = {
    loading: false,
    error: false,
    errorMessage: '',
}
export {
    defaultState,
    defaultContextValue,
    dataLoaded,
    INITIAL_PAGE,
    ActionType
}