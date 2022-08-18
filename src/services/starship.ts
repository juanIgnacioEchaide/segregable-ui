import { api } from "./api"

const getAllStarships = async () => {
    const { data } = await api.starship.getAll()
    return data
}

const getStarshipsByPage = async (page: string | number) => {
    const { data } = await api.starship.getByPage(page)
    return data
}

const getStarshipsById = async (id: number) => {
    const { data } = await api.starship.getById(id)
    return data
}

export { getStarshipsById, getAllStarships, getStarshipsByPage }