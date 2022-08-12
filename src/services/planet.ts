import { api } from "./api"

const getPlanetById = (id: string | number) => {
    return api.planets.getById(id)
}
const getAllPlanets = () => {
    return api.planets.getAll()
}

export { getPlanetById, getAllPlanets }