import { api } from "./api"

const getAllPlanets = async () => {
    const { data } = await api.planets.getAll()
    return data
}

const getPlanetById = (id: string | number) => {
    return api.planets.getById(id)
}

const getPlanetsByPage = async(page: string | number) => {
    const { data } = await api.planets.getByPage(page)
    return data
}

export { getPlanetById, getAllPlanets, getPlanetsByPage }