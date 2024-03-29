import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTypes , createPokemon} from "../actions/actions.js";
import styles from "../styles/CreatePokemon.module.css";
import pikachu from "../styles/gifs/pikachu_lp.gif";

function validate(input){
    const errors = {};
    if (!input.name || input.name.length < 4) {
        errors.name = "The name must be more than four letters";
    }
    if(!input.hp || input.hp < 0 || input.hp > 150){
        errors.hp = "Hp must be between 1 - 150";
    }
    if(!input.attack || input.attack < 0 || input.attack > 150){
        errors.attack = "Attack must be between 1 - 150";
    }
    if(!input.defense || input.defense < 0 || input.defense > 150){
        errors.defense = "Defense must be between 1 - 150";
    }
    if(!input.speed || input.speed < 0 || input.speed > 150){
        errors.speed = "Speed must be between 1 - 150";
    }
    if (input.types.length === 0) {
        errors.types = "Must have at least one type";
    }
    return errors;
}

export default function CreatePokemon(){

    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const history = useHistory();

    const [input , setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: []
    }   )
    const [errors, setErrors] = useState({firstTry:true});

    useEffect(()=>{
        dispatch(getTypes());
     },[]);
    
    useEffect(() => {
        setErrors(
          validate({
            ...input,
          })
        );
      }, [input]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    if(errors.firstTry){
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
            })
        )}
    }
    function handleSelect(e){
        if (!input.types.includes(e.target.value)) {
            setInput({
              ...input,
              types: [...input.types, e.target.value],
            });
        }
    }
    function handleDeleteType(e){
        setInput({
            ...input,
            types: input.types.filter((t) => t !== e),
    });
          
    }
    function handleSubmit(e){
        e.preventDefault();
        if(input.name && input.hp && input.attack && input.defense && input.speed && input.types.length >= 1){
            dispatch(createPokemon(input))
            alert("Success")
            setInput({
                name: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                image: "",
                types: []
            });
            errors.firstTry = false
            history.push("/home")  //cuando crea el personaje se redirige a la pag principal
        if(errors.firstTry){
            alert("Missing dates")
        }
    }}
    function handleCheckErrors(e){
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
            types: [...input.types, e.target.value]
        }))
        handleSubmit(e)
    }
    
    return(
        <div>
            <div className={styles.navBar}>
                <Link to="/home">
                <button className={styles.butHome}>Return to home</button>
                </Link>
            </div>
            
            <div className={styles.contGral}>
                <div className={styles.card}>
                <img src={pikachu} alt="pikachu" className={styles.pikachu} />
                    <div className={styles.contTitle}>
                        <div className={styles.title}>Create your pokemon</div>
                    </div>
                
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className={styles.form}>
                    <div className={styles.izq}>
                        <div>
                        <div>Name:</div>
                         <input
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                            placeholder="Name"
                            className={styles.inputs}
                         />
                    {errors.name && (<div className={styles.error}>{errors.name}</div>)}
                        </div>

                        <div>
                        <div>Hp:</div>
                    <input
                        type="number"
                        value={input.hp}
                        name="hp"
                        onChange={(e) => handleChange(e)}
                        placeholder="1 - 150"
                        className={styles.inputs}
                    />
                    {errors.hp && (<div className={styles.error}>{errors.hp}</div>)}
                        </div>

                        <div>
                        <div>Attack:</div>
                    <input
                        type="number"
                        value={input.attack}
                        name="attack"
                        onChange={(e) => handleChange(e)}
                        placeholder="1 - 150"
                        className={styles.inputs}
                    />
                        {errors.attack && (<div className={styles.error}>{errors.attack}</div>)}
                        </div>

                        <div>
                        <select
                            onChange={(e) => handleSelect(e)}
                            disabled={input.types.length >= 2}
                            defaultValue="title"
                            className={styles.select}
                            >
                        <option value="title" disabled name="types">Types</option>
                        {types.map((t) => {
                            return (
                            <option value={t.name} key={t.name} className={styles.options}>
                                {t.name[0].toUpperCase() + t.name.slice(1)}
                            </option>
                            );
                        })}
                         </select>
                        {errors.types && (<div className={styles.error}>{errors.types}</div>)}
                        <ul className={styles.types}>
                            {input.types.map((t) => {
                            return (<li key={t} className={styles.types}>
                                {t[0].toUpperCase() + t.slice(1)}
                                <button className={styles.butDelete} onClick={() => handleDeleteType(t)}>x</button>
                                </li>
                            );
                            })}
                        </ul>
                        </div>
                        

                        <div>
                        <div>Defense:</div>
                    <input
                        type="number"
                        value={input.defense}
                        name="defense"
                        onChange={(e) => handleChange(e)}
                        placeholder="1 - 150"
                        className={styles.inputs}
                    />
                    {errors.defense && (<div className={styles.error}>{errors.defense}</div>)}
                        </div>
                    </div>

                    <div className={styles.der}>

                        <div>
                        <div>Speed:</div>
                        <input
                            type="number"
                            value={input.speed}
                            name="speed"
                            onChange={(e) => handleChange(e)}
                            placeholder="1 - 150"
                            className={styles.inputs}
                        />
                        {errors.speed && (<div className={styles.error}>{errors.speed}</div>)}
                        </div>

                        <div>
                        <div>Weight<small>(kg)</small>:</div>
                        <input
                            type="weight"
                            value={input.weight}
                            name="weight"
                            onChange={(e) => handleChange(e)}
                            placeholder="Weight"
                            className={styles.inputs}
                        />
                        {errors.weight && (<div>{errors.weight}</div>)}
                        </div>

                        <div>
                        <div>Height<small>(cm)</small>:</div>
                        <input
                            type="height"
                            value={input.height}
                            name="height"
                            onChange={(e) => handleChange(e)}
                            placeholder="Height"
                            className={styles.inputs}
                        />
                          {errors.height && (<div>{errors.height}</div>)}
                        </div>

                        <div>
                        <div>Image:</div>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                            placeholder="URL"
                            className={styles.inputs}
                        />
                        {errors.image && (
                            <div className={styles.error}>{errors.image}</div>
                        )}
                        </div>
                        
                        <button id="bt" className={styles.button} onClick={e => handleCheckErrors(e)}>Create</button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        <form >
            <div>
           

           

           

            

           

            
           

            

            
            
            </div>

        </form>
        </div>
    )
}