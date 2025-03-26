import { PokemonListItem } from "./PokemonListItem";
import { getPokemonImg, getPokemonNumber, getPokemonTypes } from '/src/services/pokemonapi.js'; 
import { useState, useEffect } from "react";


export const PokemonList = ({
  pokemonList,
  nextHandler,
  previousHandler
}) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const detailsPromises = pokemonList.map(async (item) => {
        const pokemonNumber = getPokemonNumber(item.url);
        const pokemonTypes = await getPokemonTypes(item.url);
        const pokemonImg = getPokemonImg(item.url);
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
          };
        return {
            name: capitalizeFirstLetter(item.name),
          number: pokemonNumber,
          types: pokemonTypes,
          imgSprite: pokemonImg.imgSprite
        };
      });
      const details = await Promise.all(detailsPromises);
      setPokemonDetails(details);
    };

    fetchPokemonDetails();
  }, [pokemonList]);

  return (
    <section className="pokemonList">
      {pokemonDetails.map((item) => (
        <PokemonListItem
          key={item.number}
          name={item.name}
          pokemonNumber={item.number} 
          pokemonTypes={item.types}   
          imgSprite={item.imgSprite}
        />
      ))}
    </section>
  );
};
