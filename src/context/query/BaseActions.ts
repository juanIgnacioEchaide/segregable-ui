import { People, Planet, Starship } from "../../common"
import { ActionType } from "../../common/constants/context"
import { PagesPayload } from "../../common/models/entities"

const BaseActions = {
    SetLoading: (payload: boolean) => ({
        type: ActionType.SetLoading,
        payload
    }),
    SetPrevUri: (payload: string) => ({
        type: ActionType.SetPrevUri,
        payload
    }),
    SetNextUri: (payload: string) => ({
        type: ActionType.SetNextUri,
        payload
    }),
    SetError: (payload: string) => ({
        type: ActionType.SetError,
        payload
    }),
    SetErrorMessage: (payload: string) => ({
        type: ActionType.ClearError,
        payload
    }),
    UpdatePages: (payload: PagesPayload) => ({
        type: ActionType.UpdatePages,
        payload
    }),
    UpdatePeople: (payload: People[]) => ({
        type: ActionType.UpdatePeople,
        payload
    }),
    UpdatePlanets: (payload: Planet[]) => ({
        type: ActionType.UpdatePlanets,
        payload
    }),
    UpdateStarships: (payload: Starship[]) => ({
        type: ActionType.UpdatePlanets,
        payload
    }),
    UpdateDisplayedPeople: (payload: People[]) => ({
        type: ActionType.UpdateDisplayedPeople,
        payload
    }),
    UpdateDisplayedPlanets: (payload: Planet[]) => ({
        type: ActionType.UpdateDisplayedPlanets,
        payload
    }),
    UpdateDisplayedStarships: (payload: Starship[]) => ({
        type: ActionType.UpdateDisplayedStarships,
        payload
    }),
}

export { BaseActions }