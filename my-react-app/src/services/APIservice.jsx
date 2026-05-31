import axios from "axios";

const API_NAME_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (nome) => {
    try {
        const response = await axios.get(`${API_NAME_URL}/pokemon/${nome}`)
        return response.data
    } catch (error) {
        console.error("Error fetching name:", error)
        throw error
    }
}

export const getPokemonsByPokedex = async (pokedex) => {
    try {
        const response = await axios.get(`${API_NAME_URL}/pokedex/${pokedex}`)
        return response.data
    } catch (error) {
        console.error("Error fetching pokemons:", error)
        throw error
    }
}

export const getPokemons = async (limit, offset = 0) => {
    try {
        const response = await axios.get(`${API_NAME_URL}/pokemon?limit=${limit}&offset=${offset}`)
        return response.data
    } catch (error) {
        console.error("Error fetching pokemons:", error)
        throw error
    }
}