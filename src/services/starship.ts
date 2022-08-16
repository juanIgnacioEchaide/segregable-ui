import { api } from "./api"

const getStarshipById = (id: string | number) => {
    return api.starship.getById(id)
}

const getAllStarships = async () => {
    const { data } = await api.starship.getAll()
    return data
}

const getStarshipsByPage = async (page: string | number) => {
    const { data } = await api.starship.getAll()
    return data
}

export { getStarshipById, getAllStarships, getStarshipsByPage }