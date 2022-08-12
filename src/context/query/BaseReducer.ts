import { ActionType } from "../../common/constants/context";
import { Action, BaseState } from "../../common/models/entities";

const BaseReducer = (state: BaseState, action: Action): BaseState => {
    switch (action.type) {
        case ActionType.SetLoading: return { 
            ...state, 
            loading: action.payload 
        }
        case ActionType.SetNextUri: return { 
            ...state, 
            nextUri: action.payload 
        }
        case ActionType.SetPrevUri: return { 
            ...state, 
            prevUri: action.payload 
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
        case ActionType.UpdatePages: return { 
            ...state, 
            currentPage: action.payload.currentPage, 
            prevPage: action.payload.prevPage, 
            nextPage: action.payload.nextPage 
        }
        case ActionType.UpdatePeople: return {
            ...state,
            loading: false,
            error: false,
            errorMessage: '',
            people: action.payload
        }
        case ActionType.UpdatePlanets: return {
            ...state,
            loading: false,
            error: false,
            errorMessage: '',
            planets: action.payload
        }
        case ActionType.UpdateStarships: return {
            ...state,
            loading: false,
            error: false,
            errorMessage: '',
            starship: action.payload
        }
        case ActionType.UpdateDisplayedPeople: return { 
            ...state, 
            displayed: { 
                ...state.displayed, 
                people: action.payload 
            }
        }
        case ActionType.UpdateDisplayedPlanets: return { 
            ...state, 
            displayed: { 
                ...state.displayed, 
                planets: action.payload 
            } 
        }
        case ActionType.UpdateDisplayedStarships: return { 
            ...state, 
            displayed: { 
                ...state.displayed, 
                starship: action.payload 
            } 
        }
        default: return state
    }
}

export { BaseReducer }