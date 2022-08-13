import React from "react"
import { ROUTES } from "../constants"

type People = {
    name: string
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string[],
    edited: string[],
    url: string[]
}

type Planet = {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
}

type Starship = {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [],
    films: string[],
    created: string,
    edited: string,
    url: string
}

type SwapiResponse<T> = {
    count: number,
    next: string | null,
    previous: string | null,
    results?: T
}

type BaseState = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    currentPage: number,
    nextPage: number,
    prevPage: number,
    nextUri: string,
    prevUri: string,
    view: ROUTES,
    pageParam: number,
    idParam: number | string,
    people: People[]
    planets: Planet[]
    starship: Starship[]
    displayed: {
        people: People[]
        planets: Planet[]
        starship: Starship[]
    }
}

type Action = {
    type: string,
    payload: any
}

type PagesPayload = {
    currentPage: number,
    nextPage: number,
    prevPage: number
}

type UpdatePeoplePayload = {
    currentPage: number,
    nextPage: number,
    prevPage: number,
    people: People[],
    nextUri: string | null,
    prevUri: string | null
}
type ContextValue = {
    state: BaseState,
    dispatch: React.Dispatch<Action>
}

export type { 
    People, 
    Planet, 
    Starship, 
    SwapiResponse, 
    BaseState, 
    Action, 
    UpdatePeoplePayload, 
    PagesPayload,
    ContextValue 
}