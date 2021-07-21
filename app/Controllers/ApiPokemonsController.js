import { ProxyState } from "../AppState.js"
import { apiPokemonsService } from "../Services/ApiPokemonsService.js"

function _drawAll() {
    const pokemon = ProxyState.allApiPokemon
    let template = ''
    pokemon.forEach(p => template += `<li class="action" onclick="app.apiPokemonsController.getPokemon('${p.id}')">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}

function _drawActivePokemon(){
    if (!ProxyState.activePokemon){
    document.getElementById('active-pokemon').innerHTML = `<div class="text-center"><em>No Active Pokemon</em></div>`
    return
}
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
}




export default class ApiPokemonsController{

    constructor() {
        ProxyState.on('allApiPokemon', _drawAll)
        ProxyState.on('activePokemon', _drawActivePokemon)

        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await apiPokemonsService.getAllPokemon()
        } catch (error) {
            console.error('There was an issue getting all Pokemon from your API')
        }
    }

    async getPokemon(id) {
        try {
          await apiPokemonsService.getPokemon(id)  
        } catch (error) {
            console.error('Unable to get Pokemon details', error)
        }
    }


}
