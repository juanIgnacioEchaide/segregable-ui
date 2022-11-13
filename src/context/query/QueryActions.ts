import { People, Planet, Starship } from "../../common"
import { ActionType } from "../../common/constants/context"
import { VIEW } from "../../common/constants/uri"
import { Film, Specie, UpdatePayload, Vehicle } from "../../common/models/entities"

const QueryActions = {
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
    UpdateVehicles: (payload: UpdatePayload<Vehicle>) => ({
        type: ActionType.UpdateVehicles,
        payload
    }),
    UpdateSpecies: (payload: UpdatePayload<Specie>) => ({
        type: ActionType.UpdateSpecies,
        payload
    }),
    UpdateFilms: (payload: UpdatePayload<Film>) => ({
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
    UpdateDisplayedVehicles: (payload: Vehicle[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
    UpdateDisplayedSpecies: (payload: Specie[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
    UpdateDisplayedFilm: (payload: Film[]) => ({
        type: ActionType.UpdateDisplayedVehicles,
        payload
    }),
}

export { QueryActions }