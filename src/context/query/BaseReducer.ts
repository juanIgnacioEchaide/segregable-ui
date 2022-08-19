import { ActionType, StateEntity } from "../../common/constants/context";
import { Action, BaseState } from "../../common/models/entities";
import { updateAfterLoad, updateDisplayed } from "../../common/utils/helpers";

const BaseReducer = (state: BaseState, action: Action): BaseState => {

    switch (action.type) {
        //// UI FLAGS & NAVIGATION 
        case ActionType.SetLoading: return {
            ...state,
            loading: action.payload
        }
        case ActionType.SetError: return {
            ...state,
            error: true,
            errorMessage: action.payload
        }
        case ActionType.ClearError: return {
            ...state,
            error: false,
            errorMessage: ''
        }
        case ActionType.SetView: return {
            ...state,
            view: action.payload
        }

        ///// POPULATES PERSISTENT GLOBAL STATE 
        case ActionType.UpdatePeople: return {
            ...updateAfterLoad(StateEntity.People, action.payload, state)
        }
        case ActionType.UpdateSpecies: return {
            ...updateAfterLoad(StateEntity.Species, action.payload, state)
        }
        case ActionType.UpdatePlanets: return {
            ...updateAfterLoad(StateEntity.Planets, action.payload, state)
        }
        case ActionType.UpdateStarships: return {
            ...updateAfterLoad(StateEntity.Starship, action.payload, state)
        }
        case ActionType.UpdateVehicles: return {
            ...updateAfterLoad(StateEntity.Vehicles, action.payload, state)
        }
        case ActionType.UpdateFilms: return {
            ...updateAfterLoad(StateEntity.Films, action.payload, state)
        }

        ///// POPULATES DISPLAYED STATE
        case ActionType.UpdateDisplayedPeople: return {
            ...updateDisplayed(StateEntity.People, action.payload, state)
        }
        case ActionType.UpdateDisplayedPlanets: return {
            ...updateDisplayed(StateEntity.Planets, action.payload, state)
        }
        case ActionType.UpdateDisplayedStarships: return {
            ...updateDisplayed(StateEntity.Starship, action.payload, state)
        }
        case ActionType.UpdateDisplayedVehicles: return {
            ...updateDisplayed(StateEntity.Vehicles, action.payload, state)
        }
        case ActionType.UpdateDisplayedSpecies: return {
            ...updateDisplayed(StateEntity.Species, action.payload, state)
        }
        case ActionType.UpdateDisplayedFilms: return {
            ...updateDisplayed(StateEntity.Films, action.payload, state)
        }
        default: return state
    }
}

export { BaseReducer }