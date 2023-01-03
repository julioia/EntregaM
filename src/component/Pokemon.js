import axios from "axios";
import React, { useEffect, useState } from "react";


const Pokemon = ({ thisPokemon }) => {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {
            front_default: ""


        }
    });
    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getPokemon(thisPokemon.url)
    })

    return (
        <div className="container align=center">
            
            <ul>
                <h7><p>El nombres es:<p>{onePokemon.name}</p>
                <img alt="" src={onePokemon.sprites.front_default}></img></p>
                ID:<p>{onePokemon.id}</p>
                Base de experiencia es:<p>{onePokemon.base_experience}</p>
                Tipo es:<p>{onePokemon.order}</p>
                Altura:<p>{onePokemon.height}</p>
                Peso:<p>{onePokemon.weight}</p>
                

                </h7>
            </ul>               
                

        </div>
    )
}

export default Pokemon;