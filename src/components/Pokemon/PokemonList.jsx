import { PokemonListItem } from "./PokemonListItem";
import { getPokemonImg} from '/src/services/pokemonapi.js'; 

export const PokemonList = (
    {
        pokemonList,
        nextHandler,
        previousHandler
    }
)=>{
    return (
        <section className="pokemonList">
            { pokemonList.map(
                (item)=>{
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                            {...getPokemonImg(item.url)} 
                        />
                    )
                }
            )}
        </section>
    );
}
