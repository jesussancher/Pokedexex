import React from 'react';

export default function Card(props){
    return (
        <div onClick={() => props.pokeSelect(props.name,props.types,props.image,props.base)} id="card" className={`card ${props.types[0]}`}>
                <img className="sprite" src={props.image} alt="pokemon" />
                <input type="submit" id="pokeName" className="dark-grey press-start" value={props.name} />
                {/* {props.types.map(type => {
                    return <span className={`types ${type}`}>{type}</span>
                })} */}
        </div>
    )
    // {pokemons.filter( pokemon => { return typeSelected === "Todos" ?  true :  pokemon.type.includes(typeSelected) } ).map(pokemon => {
    //     return (<Card name={pokemon.name.english} image={pokemon.sprite} base={pokemon.base} types={pokemon.type} pokeSelect={pokeSelect}/>)
    //   })}
}