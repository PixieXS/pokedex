import { useState, useEffect } from "react";


export const usePokemonList = (page = 0, limit = 20) => {
  const [data, setData] = useState({
    count: 0,
    results: [],
    next: null,
    previous: null
  });

  useEffect(() => {
    const fetchPokemonList = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${page * limit}&limit=${limit}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al cargar PokedexAPI:", error);
        setData({ count: 0, results: [], next: null, previous: null });
      }
    };

    fetchPokemonList();
  }, [page, limit]);

  return data;
};

export const getPokemonImg = (pokemonUrl) => {
    const pokemonCode = pokemonUrl.split('/')[6] || '';
    return {
      code: pokemonCode,
      imgSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonCode}.png`
    };
};
