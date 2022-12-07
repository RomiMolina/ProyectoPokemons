import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchByName } from "../actions/actions.js";
import styles from "../styles/SearchBar.module.css";
import buscar from "../styles/images/buscar.png";

export default function SearchBar(){

    const dispatch= useDispatch();
    const [name, setName] = useState("");
    
    function handleInput(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchByName(name));
        setName("") // para dejarlo vacio despues de la busqueda
    }

    return(
        <div className="buscador">
        <input
            type="text"
            placeholder="Find your pokemon..."
            onChange={(e) => handleInput(e)}
            value={name}
            className={styles.input}
        />

        <button
            type="submit"
            onClick={(e) => handleSubmit(e)}  
            className={styles.butBuscar}
        >
            <img src={buscar} alt="buscar" className={styles.buscar}></img>
        </button>
    </div>
    )
}