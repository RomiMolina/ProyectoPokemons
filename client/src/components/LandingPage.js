import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";
import logo from "../styles/images/logo_pokemon.png";
import pikachu from "../styles/gifs/loading.gif";



export default function LandingPage(){

    return(
        <div className={styles.background}>
            <div className={styles.contIzq}>
            <img src={logo} alt="logo" className={styles.logo}/>
                <div className={styles.contTitle}>

            <div className={styles.title}>Welcome your PokeApi!</div>
            <div className={styles.paragraph}>
                Find all the information about your favorite pokemons. 
                You can also create them!
            </div> 
            <Link to="/home">
                <button className={styles.button}>Let's go ! </button>
            </Link>
            </div>
        </div> 
            <div className={styles.contDer}>
              <img src={pikachu} alt="pikachu" className={styles.pikachuImg} />
          </div>

        </div>

     
    )
}

{/* <div className={styles.contIzq}>
<img src={logo} alt="logo" className={styles.logo}/>
<div className={styles.contTitle}>
    <div className={styles.title}>Welcome!</div>
    {/* <div className={styles.paragraph}>
        Find all the information about your favorite pokemons. You can also create them!
//     </div> */}
//     <Link to="/home">
//      <button className={styles.button}>Let's go ! </button>
//      </Link>
// </div>
// </div> */}





{/* <div className={styles.background} >
            
<Link to="/home">
    <button className={styles.button}>Let's go ! </button>
</Link>   

</div> */}