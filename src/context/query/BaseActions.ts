import { People, Planet, Starship } from "../../common"
import { ActionType } from "../../common/constants/context"
import { VIEW } from "../../common/constants/uri"
import { UpdatePayload } from "../../common/models/entities"

const BaseActions = {
    SetLoading: (payload: boolean) => ({
        type: ActionType.SetLoading,
        payload
    }),
    SetView: (payload: VIEW) => ({
        type: ActionType.SetView,
        payload
    }),
    SetError: (payload: string) => ({
        type: ActionType.SetError,
        payload
    }),
    ClearError: () => ({
        type: ActionType.ClearError
    }),
    SetErrorMessage: (payload: string) => ({
        type: ActionType.ClearError,
        payload
    }),
    UpdatePeople: (payload: UpdatePayload<People>) => ({
        type: ActionType.UpdatePeople,
        payload
    }),
    UpdatePlanets: (payload: UpdatePayload<Planet>) => ({
        type: ActionType.UpdatePlanets,
        payload
    }),
    UpdateStarships: (payload: UpdatePayload<Starship>) => ({
        type: ActionType.UpdateStarships,
        payload
    }),
    UpdateVehicles: (payload: UpdatePayload<Starship>) => ({
        type: ActionType.UpdateVehicles,
        payload
    }),
    UpdateSpecies: (payload: UpdatePayload<Starship>) => ({
        type: ActionType.UpdateSpecies,
        payload
    }),
    UpdateFilms: (payload: UpdatePayload<Starship>) => ({
        type: ActionType.UpdateFilms,
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
    UpdateDisplayedVehicles: (payload: Starship[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
    UpdateDisplayedSpecies: (payload: Starship[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
    UpdateDisplayedFilm: (payload: Starship[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
}

export { BaseActions }