export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?value=20',
    timeout: 5000
})

export const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/aaronpeet/pokemon',
    setTimeout: 5000
})