import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from "../services/pockemonapi";
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return <Loading />;
    }

    const { name, id, types, height, weight, abilities, stats, sprites } = pokemonData;

    const getTypeColor = (type) => {
        const colors = {
            fire: "bg-red-500",
            water: "bg-blue-500",
            grass: "bg-green-500",
            electric: "bg-yellow-400",
            bug: "bg-lime-500",
            normal: "bg-gray-400",
            poison: "bg-purple-500",
            ground: "bg-yellow-700",
            fairy: "bg-pink-400",
            fighting: "bg-orange-700",
            psychic: "bg-pink-500",
            rock: "bg-yellow-800",
            ghost: "bg-indigo-500",
            dragon: "bg-indigo-700",
            dark: "bg-gray-800",
            steel: "bg-gray-500",
            ice: "bg-cyan-300",
            flying: "bg-sky-400"
        };
        return colors[type] || "bg-gray-500";
    };

    return (
        <section className="max-w-5xl mx-auto p-6 mt-10 rounded-3xl bg-red-600 shadow-xl text-white border-4 border-black font-sans space-y-8 relative overflow-hidden">

            {/* Pokédex header */}
            <div className="flex justify-between items-center border-b border-black pb-2">
                <h1 className="text-4xl font-bold">
                    {name.toUpperCase()} <span className="text-white/70">#{id}</span>
                </h1>
                <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow"></div>
                </div>
            </div>

            {/* Sprites */}
            <div className="flex justify-center gap-6 bg-black/20 p-4 rounded-xl flex-wrap">
                <img
                    className="w-40 h-40 object-contain border-4 border-black bg-white rounded-xl"
                    src={sprites.front_default}
                    alt={`${name} front`}
                />
                <img
                    className="w-40 h-40 object-contain border-4 border-black bg-white rounded-xl"
                    src={sprites.back_default}
                    alt={`${name} back`}
                />
                {sprites.front_shiny && (
                    <img
                        className="w-40 h-40 object-contain border-4 border-yellow-400 bg-white rounded-xl"
                        src={sprites.front_shiny}
                        alt={`${name} shiny front`}
                    />
                )}
                {sprites.back_shiny && (
                    <img
                        className="w-40 h-40 object-contain border-4 border-yellow-400 bg-white rounded-xl"
                        src={sprites.back_shiny}
                        alt={`${name} shiny back`}
                    />
                )}
            </div>

            {/* Info técnica */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg bg-white text-black p-4 rounded-xl shadow-inner">
                <div>
                    <p><span className="font-bold">Altura:</span> {height / 10} m</p>
                    <p><span className="font-bold">Peso:</span> {weight / 10} kg</p>
                </div>
                <div>
                    <p><span className="font-bold">Habilidades:</span> {abilities.map(a => a.ability.name).join(", ")}</p>
                    <div className="mt-2">
                        <p className="font-bold">Tipo:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {types.map((t) => (
                                <span
                                    key={t.type.name}
                                    className={`px-3 py-1 rounded-full text-white text-sm shadow-md ${getTypeColor(t.type.name)}`}
                                >
                                    {t.type.name.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-black/30 p-4 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2">Estadísticas Base</h3>
                <ul className="space-y-1">
                    {stats.map(stat => (
                        <li key={stat.stat.name} className="flex items-center gap-2">
                            <span className="capitalize w-32">{stat.stat.name}:</span>
                            <div className="bg-gray-700 rounded h-4 w-full">
                                <div
                                    className="bg-white h-4 rounded"
                                    style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                                ></div>
                            </div>
                            <span className="ml-2">{stat.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Agregar a colección */}
            <div className="bg-black/10 p-4 rounded-xl">
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={sprites.front_default}
                    name={name}
                    url=""
                />
            </div>

            {/* Debug info */}
            <details className="bg-white/20 p-4 rounded-md text-sm">
                <summary className="cursor-pointer text-white font-semibold">Ver JSON completo</summary>
                <pre className="mt-2 overflow-x-auto text-xs">{JSON.stringify(pokemonData, null, 2)}</pre>
            </details>
        </section>
    );
};
