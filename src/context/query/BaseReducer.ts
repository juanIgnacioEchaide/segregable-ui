import { ActionType, StateEntity } from "../../common/constants/context";
import { Action, BaseState } from "../../common/models/entities";
import { updateAfterLoad, updateDisplayed } from "../../common/utils/helpers";

const BaseReducer = (state: BaseState, action: Action): BaseState => {

    switch (action.type) {
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
        case ActionType.UpdatePeople: return {
            ...updateAfterLoad(StateEntity.People, action.payload, state)
        }
        case ActionType.UpdatePlanets: return {
            ...updateAfterLoad(StateEntity.Planets, action.payload, state)
        }
        case ActionType.UpdateStarships: return {
            ...updateAfterLoad(StateEntity.Starship, action.payload, state)
        }
        case ActionType.UpdateDisplayedPeople: return {
            ...updateDisplayed(StateEntity.People, action.payload, state)
        }
        case ActionType.UpdateDisplayedPlanets: return {
            ...updateDisplayed(StateEntity.Planets, action.payload, state)
        }
        case ActionType.UpdateDisplayedStarships: return {
            ...updateDisplayed(StateEntity.Starship, action.payload, state)
        }
        default: return state
    }
}

export { BaseReducer }