import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class ApiPokemonsService{
    
    async getAllPokemon() {
        const res = await pokeApi.get()
        console.log('got all pokemon', res.data.results)
        ProxyState.allApiPokemon = res.data.results.map(p => new Pokemon(p))
    }

    async getPokemon(id) {
        let res = await pokeApi.get(id)
        ProxyState.activePokemon = new Pokemon(res.data)
    }
}

export const apiPokemonsService = new ApiPokemonsService()