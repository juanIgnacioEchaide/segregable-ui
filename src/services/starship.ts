import { api } from "./api"

const getStarshipById = (id: string | number) => {
    return api.starship.getById(id)
}
const getAllStarships = () => {
    return api.starship.getAll()
}

export { getStarshipById, getAllStarships }