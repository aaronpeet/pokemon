import { ProxyState } from "../AppState.js"

export default class Pokemon {
    constructor({ name, img, weight, height, type, id, forms, sprites}) {
        this.name = name  //possibley need to take out the ".forms"
        this.sprites = img || "sprites.other.dream_world.front_default"
        this.weight = weight
        this.height = height
      this.type = type
        this.id = id
    }
    
    get Template() {
        return `
     <div class="bg-light m-3 p-3 shadow">
          <div>
              <h4 class='uppercase'>${this.name}</h4>
             <img src="${this.img}" alt="pokemon">
              <p>Weight: ${this.weight}</p>
              <p>Height: ${this.height}</p>
              <p>Type: ${this.type}</p>
          </div>
          <div class="text-right">
              <button type="button" class="btn btn-success" onclick="app.myPokemonController.catchPokemon()">Catch Pokemon</button>
          </div>
      </div>
        `
    }

     /* get Button() {
    const exists = ProxyState.myPokemon.find(p => p.name === ProxyState.activePokemon.name)
    if (this.index) {
      return `
          <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.mySpellsController.addSpell()">Add Spell</button>`
    }
    return `
      <button type="button" class="btn btn-danger" onclick="app.mySpellsController.removeSpell()">Remove Spell</button>
    `
  }*/
}
