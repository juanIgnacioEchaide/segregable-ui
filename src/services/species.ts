import { api } from "./api"

const getAllSpecies = async () => {
    const { data } = await api.species.getAll()
    console.log(data)
    return data
}

const getSpeciesByPage = async (page: string | number) => {
    const { data } = await api.species.getByPage(page)
    return data
}

const getSpeciesById = async (id: number) => {
    const { data } = await api.species.getById(id)
    return data
}

export { getAllSpecies, getSpeciesByPage, getSpeciesById }