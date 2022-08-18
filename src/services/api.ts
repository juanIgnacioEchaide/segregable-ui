import { AxiosResponse } from "axios";
import { People, Planet, Starship, URI } from "../common";
import { SwapiResponse } from "../common/models/entities";
import { apiClient } from "./apiClient"

const api = {
    people: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.PEOPLE);
            return data
        },
        getByPage: (page: number): Promise<AxiosResponse<SwapiResponse<People>>> => {
            const data = apiClient.get(`${URI.PEOPLE}/?page=${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<SwapiResponse<People>>> => {
            const data = apiClient.get(`${URI.PEOPLE}/${id}`);
            return data
        },
    },
    planets: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.PLANET);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.PLANET}/?page=${page}`);
            return data
        },
        getById: (id: number): Promise<AxiosResponse<SwapiResponse<any>>>  => {
            const data = apiClient.get(`${URI.PLANET}/${id}`);
            return data
        },
    },
    starship: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.STARSHIP);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.STARSHIP}/?page=${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<SwapiResponse<Starship>>> => {
            const data = apiClient.get(`${URI.STARSHIP}/${id}`);
            return data
        },
    },
    films: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.FILMS);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.FILMS}/?page=${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<SwapiResponse<Starship>>> => {
            const data = apiClient.get(`${URI.FILMS}/${id}`);
            return data
        },
    },
    species: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.SPECIES);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.SPECIES}/?page=${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<any>> => {
            const data = apiClient.get(`${URI.SPECIES}/${id}`);
            return data
        },
    },
    vehicles: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.VEHICLES);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.VEHICLES}/?page=${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<any>> => {
            const data = apiClient.get(`${URI.VEHICLES}/${id}`);
            return data
        },
    },
}

export { api }