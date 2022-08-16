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
        getByPage: (page: number): Promise<AxiosResponse<SwapiResponse<People[]>>> => {
            const data = apiClient.get(`${URI.PEOPLE}/?${page}`);
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
        getById: (id: string | number): Promise<AxiosResponse<Planet>> => {
            const data = apiClient.get(`${URI.PLANET}/${id}`);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.PLANET}/?${page}`);
            return data
        },
    },
    starship: {
        getAll: (): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(URI.STARSHIP);
            return data
        },
        getByPage: (page: string | number): Promise<AxiosResponse<SwapiResponse<any>>> => {
            const data = apiClient.get(`${URI.STARSHIP}/?${page}`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<Starship>> => {
            const data = apiClient.get(`swapi/${id}`);
            return data
        },
    }
}

export { api }