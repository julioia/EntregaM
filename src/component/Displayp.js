import React from "react";
import Pokemon from "./Pokemon";


const Displayp = ({ pokemon }) => {

    return (
        <div>

            {
                pokemon.map((datos, index) =>
                    <div className="card" style={{ minwidth: "50px" }}>
                        <Pokemon key={index} thisPokemon={datos} />

                    </div>

                )
            }

        </div>
    )
}
export default Displayp;