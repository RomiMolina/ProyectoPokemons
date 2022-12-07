import axios from "axios";
import {GET_ALL_POKEMONS , 
        SEARCH_BY_NAME, 
        FILTER_CREATED,
        ORDER_BY_NAME,
        ORDER_BY_ATTACK,
        RESET_POKEMONS,
        GET_TYPES,
        FILTER_BY_TYPES,
        GET_DETAIL} from "../actions/actionsTypes.js"


export function getAllPokemons(){
    // return function (dispatch){
    //     axios.get("http://localhost:3001/pokemons")
    //     .then(
    //        ( r) =>{
    //         return dispatch({
    //             type: GET_ALL_POKEMONS,
    //             payload: r.data
    //         })}
    //     )}
    return async function(dispatch){
        let json = await axios.get("/pokemons", {});
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get("/types", {});
        return dispatch({
            type: GET_TYPES,
            payload: json.data
        })
    }
}

export function searchByName(name){
    return async function(dispatch){
        let json = await axios.get("/pokemons?name=" + name);
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: json.data
        })
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function filterByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function filterByAttack(payload){
    return{
        type: ORDER_BY_ATTACK,
        payload
    }
}

export function resetPokemons(payload){
    return{
        type: RESET_POKEMONS,
        payload
    }
}

export function filterByTypes(payload){
    return{
        type: FILTER_BY_TYPES,
        payload
    }
}

export function getDetail(id){
    return async function(dispatch){
        let json = await axios.get("/pokemons/" + id);
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        })
    }
}

export function createPokemon(payload){
    return async function(){
        let json = await axios.post("/pokemons", payload);
        return json;
    }
}

export function deletePokemon(id) {
    return async function (dispatch) {
      try {
        await axios.delete(`/delete/${id}`);
        return dispatch({
          type: GET_DETAIL,
        });
      } catch (error) {
        console.log("Error deleting pokemon", error);
      }
    };
}
  
//   export function editPokemon(id, pokemonEdited) {
//     return async function (dispatch) {
//       try {
//         const json = await axios.put(`/edit/${id}`, pokemonEdited);
//         return dispatch({
//           type: EDIT_POKEMON,
//           payload: json.data,
//         });
//       } catch (error) {
//         console.log("Error when editing the pokemon", error);
//       }
//     };
//   }
  