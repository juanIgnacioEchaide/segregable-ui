import React from "react"
import { ActionType } from "../constants"
import { VIEW } from "../constants/uri"

type People = {
    name: string
    height: string,
    mass: string,
    hairColor: string,
    skinColor: string,
    eyeColor: string,
    birthYear: string,
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
    rotationPeriod: string,
    orbitalPeriod: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surfaceWater: string,
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
    costInCredits: string,
    length: string,
    maxAtmospheringSpeed: string,
    crew: string,
    passengers: string,
    cargoCapacity: string,
    consumables: string,
    hyperdriveRating: string,
    MGLT: string,
    starshipClass: string,
    pilots: [],
    films: string[],
    created: string,
    edited: string,
    url: string
}

type Vehicle = {
    cargoCapacity: string,
    consumables: string,
    costInCredits: string,
    created: string,
    crew: string,
    edited: string,
    /* url to fetch by id */
    films: string[],
    length: string
    manufacturer: string,
    maxAtmospheringSpeed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: string[]
    url: string,
    vehicleClass: string,
}

type Film = {
    characters: string[],
    created: string,
    director: string,
    edited: string,
    episodeId: 4,
    openingCrawl: string,
    planets: string[],
    producer: string
    releaseDate: string
    species: string[]
    starships: string[]
    title: string
    url: string
    vehicles: string[]
}

type Specie = {
    averageHeight: string
    averageLifespan: string
    classification: string
    created: string
    designation: string
    edited: string
    eyeColors: string
    films: string[]
    hairColors: string
    homeworld: string
    language: string
    name: string
    people: string[]
    skinColors: string
    url: string
}
type SwapiResponse<T> = {
    count: number,
    next: string | null,
    previous: string | null,
    results?: T[] | T
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
    view: VIEW,
    pageParam: number,
    idParam: number,
    stringParam: string,
    people: People[]
    planets: Planet[]
    starship: Starship[]
    vehicles: Vehicle[],
    species: Specie[],
    films: Film[],
    displayed: {
        people: People[]
        planets: Planet[]
        starship: Starship[]
        vehicles: Vehicle[],
        species: Specie[],
        films: Film[],
    }
}

type Action = {
    type: ActionType,
    payload: any
}

type PagesPayload = {
    currentPage: number,
    nextPage: number,
    prevPage: number
}

type UpdatePayload<T> = {
    currentPage: number,
    nextPage: number,
    prevPage: number,
    results: T[],
    nextUri: string | null,
    prevUri: string | null
}
type ContextValue = {
    state: BaseState,
    dispatch: React.Dispatch<Action>
}

type ViewStateLogic = {
    allQuery: () => Promise<SwapiResponse<People | Planet | Starship>>;
    byPageQuery: (
        page: number
    ) => Promise<SwapiResponse<People | Planet | Starship>>;
    byIdQuery: (
        id: number
    ) => Promise<SwapiResponse<People | Planet | Starship>>;
    updateFn: (data: UpdatePayload<People | any>) => Action;
}

type ViewQueries = Record<VIEW | any, ViewStateLogic>

export type {
    People,
    Planet,
    Starship,
    Vehicle,
    Film,
    Specie,
    SwapiResponse,
    BaseState,
    Action,
    UpdatePayload,
    PagesPayload,
    ContextValue,
    ViewStateLogic,
    ViewQueries
}