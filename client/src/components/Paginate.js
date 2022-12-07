import React from "react";
import styles from "../styles/Paginate.module.css";

export default function Paginate ({ allPokemons , pokemonsPerPage , paginate}){
 
    const pageNumber = [];
    for (let i = 1 ; i<= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumber.push(i); 
        
    }
    //console.log(allPokemons)

    return(
        <div>
        <nav>
            <ul className={styles.pagination}>
                {pageNumber && 
                    pageNumber.map(number => {
                    return (
                        <li key = {number}> 
                      
                        <button id="pagination" className={styles.button} onClick={() => paginate(number)}>
                        {number}
                        </button>
                        
                        </li>
                    )                   
                }) 
                }
            </ul>
        </nav>
    
        </div>
    )
};
