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
        getAll: (): Promise<AxiosResponse<any>> => {
            const data = apiClient.get(`swapi/`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<Planet>> => {
            const data = apiClient.get(`swapi/${id}`);
            return data
        },
    },
    starship: {
        getAll: (): Promise<AxiosResponse<Starship[]>> => {
            const data = apiClient.get(`swapi/`);
            return data
        },
        getById: (id: string | number): Promise<AxiosResponse<Starship>> => {
            const data = apiClient.get(`swapi/${id}`);
            return data
        },
    }
}

export { api }