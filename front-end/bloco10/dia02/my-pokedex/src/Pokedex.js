import React from "react";

import Pokemon from "./Pokemon";

import data from './data';

class Pokedex extends React.Component{
    render() {
        return(
    data.map((pokemon) => <Pokemon key={pokemon.name} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight.value} measurementUnit={pokemon.averageWeight.measurementUnit} image={pokemon.image}/>)
        );
    }
}

export default Pokedex;