import {GET_ALL_POKEMONS, SEARCH_BY_NAME , 
        FILTER_CREATED, ORDER_BY_NAME, 
        ORDER_BY_ATTACK, RESET_POKEMONS, GET_TYPES, 
        FILTER_BY_TYPES, GET_DETAIL, CREATE_POKEMON,
        DELETE_POKEMON} from "../actions/actionsTypes.js"



const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    details: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case SEARCH_BY_NAME:
            return{
                ...state,
                pokemons: action.payload
            }
        case FILTER_CREATED:
            const createdFilter= action.payload === "created" ? state.allPokemons.filter(el => el.createInDB) : state.allPokemons.filter(el => !el.createInDB)
            return{
                ...state,
                pokemons: action.payload === "all" ? state.allPokemons : createdFilter
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case FILTER_BY_TYPES:
            let allTypes = [...state.allPokemons];
            const typesFilter = action.payload === "all" ? allTypes : allTypes.filter( (p) => p.types.includes(action.payload));
            return{
                ...state,
                pokemons: typesFilter
            }
        case ORDER_BY_NAME:
            let allPokemons =[...state.pokemons]
            let pokemonSorted = action.payload === "asc" ?
                allPokemons.sort(function(a, b){
                    if(a.name > b.name){
                        return 1 ;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0
                }) :
                allPokemons.sort(function(a, b){
                    if(a.name > b.name){
                        return -1; 
                    }
                    if(b.name > a.name){
                        return 1 ;
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: pokemonSorted
            }
        case ORDER_BY_ATTACK:
            let allPoke= [...state.pokemons];
            let pokemonByAttack = action.payload === "strong" ?
                allPoke.sort(function(a, b){
                    if(a.attack > b.attack){
                        return 1 ;
                    }
                    if(b.attack > a.attack){
                        return -1;
                    }
                    return 0
                }) :
                allPoke.sort(function(a, b){
                    if(a.attack > b.attack){
                        return -1; 
                    }
                    if(b.attack > a.attack){
                        return 1 ;
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: pokemonByAttack
            }
        case RESET_POKEMONS:
            const resetPokemons = [...state.allPokemons]
            return{
                ...state,
                pokemons: resetPokemons
            }
        case GET_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case CREATE_POKEMON:
            return{
                ...state,
            }
        case DELETE_POKEMON:
            return {
            ...state,
            };

        default: return state
    }
}


export default rootReducer;
