import React  from "react";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import {Link , useHistory, useParams} from "react-router-dom";
import { deletePokemon, getAllPokemons, getDetail } from "../actions/actions.js";
import styles from "../styles/Details.module.css";
import pokeball from "../styles/gifs/pokebola.gif";
import "../styles/Colors.css";

export default function Detail(){

    const dispatch = useDispatch();
    const { id } = useParams();
    const allDetails = useSelector(state => state.details);
    const history = useHistory();

    useEffect(()=>{
        dispatch(getDetail(id))
    },[dispatch, id])

    function handleDelete(){
      dispatch(deletePokemon(id));
      alert("Pokemon successfully removed");
      history.push("/home");
      dispatch(getAllPokemons());
    }

    return(
        <div>
          <div className={styles.navBar}>
            <Link to="/home">
            <button className={styles.buttonHome}>Return to home</button>
            </Link>
          </div> 

          {
          allDetails.length > 0 ? (
            <div className={styles.contenedor}>
            <div className={styles.contAzul}>
              <div className={styles.contGris}>
                <div className={styles.contIzq}>
                  <div className={styles.circulo}>
                    <img
                    src={allDetails[0].image}
                    alt="img pokemon"
                    className={styles.image}
                    />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.name}>
                      {allDetails[0].name[0].toUpperCase() + allDetails[0].name.slice(1)}
                    </div>
                    <ul className={styles.types}>
                      {allDetails[0].types.map((t) => (
                    <div key={allDetails[0].name + t} className={t}>
                      {t.toUpperCase()}
                    </div> ))}
                    </ul>
                  <div className={styles.id}>ID #{allDetails[0].id}</div>
                  </div>
                </div>

                <div className={styles.contDer}>
                  <div className={styles.alturaPeso}>
                      <div className={styles.medidas}>
                          <div className={styles.title}>Height</div>
                              {allDetails[0].height > 0 ? (
                          <div>{allDetails[0].height / 10} m</div>
                      ) : (
                    <div> ? </div>
                  )}
                  </div>

                <div className={styles.medidas}>
                  <div className={styles.title}>Weight</div>
                  {allDetails[0].weight > 0 ? (
                    <div>{allDetails[0].weight / 10}kg</div>
                  ) : (
                    <div> ? </div>
                  )}
                </div>  
                </div>
                
                <div className={styles.stats}>
                  <div className={styles.filaStat}>
                      <div>Hp</div>
                          <div className={styles.number}>{allDetails[0].hp}</div>
                      <div className={styles.barra}>
                          <div className={styles.hp}
                              style={{
                              width: `${(allDetails[0].hp / 150) * 100}%`,
                              }}></div>
                      </div>
                  </div>

                  <div className={styles.filaStat}>
                  <div>Attack</div>
                      <div className={styles.number}>
                          {allDetails[0].attack}
                      </div>
                  <div className={styles.barra}>
                    <div
                      className={styles.ataque}
                      style={{
                        width: `${(allDetails[0].attack / 150) * 100}%`,
                      }} ></div>
                  </div>
                  </div>
              
                  <div className={styles.filaStat}>
                      <div>Defense</div>
                          <div className={styles.number}>
                              {allDetails[0].defense}
                          </div>
                      <div className={styles.barra}>
                          <div
                              className={styles.defensa}
                              style={{
                                  width: `${(allDetails[0].defense / 150) * 100}%`,
                              }}></div>
                      </div>
                  </div>
                
                  <div className={styles.filaStat}>
                      <div>Speed</div>
                          <div className={styles.number}>{allDetails[0].speed}</div>
                  <div className={styles.barra}>
                    <div
                      className={styles.velocidad}
                      style={{
                        width: `${(allDetails[0].speed / 150) * 100}%`,
                      }}></div>
                  </div>
                  </div>
                  {allDetails[0].createInDB && (
                    <div className={styles.button}>
                      <button onClick={(e)=> handleDelete(e)} className={styles.butDelete}>
                      Delete Pokemon
                      </button>
                    </div>
                  )}
                  </div>
              </div>
            </div>
            </div>
            </div> 
           ) : (
          <div className={styles.poke}>
             <img src={pokeball} alt="pokeball" className={styles.pokeball}/>
          </div>
          )}        
       </div>
    );
  }