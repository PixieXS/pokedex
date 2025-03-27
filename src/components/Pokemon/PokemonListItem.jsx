export const PokemonListItem = ({
  name,
  imgSprite = "https://picsum.photos/id/2/48/48",
  onClickHandler = (e) => {
    alert("Clicked");
  },
  pokemonNumber,
  pokemonTypes = [],
}) => {
  const getTypeColor = (type) => {
    const typeColors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dark: "#705848",
      dragon: "#7038F8",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
      unknown: "#68A090",
      shadow: "#404040",
      default: "#A8A8A8"
    };
    return typeColors[type.toLowerCase()] || typeColors.default;
  };

  const translateType = (type) => {
    const translations = {
      normal: "Normal",
      fire: "Fuego",
      water: "Agua",
      grass: "Planta",
      electric: "Eléctrico",
      ice: "Hielo",
      fighting: "Lucha",
      poison: "Veneno",
      ground: "Tierra",
      flying: "Volador",
      psychic: "Psíquico",
      bug: "Insecto",
      rock: "Roca",
      ghost: "Fantasma",
      dark: "Siniestro",
      dragon: "Dragón",
      steel: "Acero",
      fairy: "Hada",
      unknown: "Desconocido",
      shadow: "Sombra",
    };
    return translations[type.toLowerCase()] || type;
  };

  return (
    <div className="pokemonListItem">
      <img src={imgSprite} alt={name} />
      <div>
        <span className="pokemonNumber">N.º {pokemonNumber}</span>
        <h2>{name}</h2>
        <div className="pokemonTypes">
          {pokemonTypes.map((type) => (
            <span
              key={type}
              style={{
                backgroundColor: getTypeColor(type),
                color: "#fff", 
                padding: "5px 15px",
                borderRadius: "15px",
                fontWeight: "bold",
                fontSize: "11px",
              }}
            >
              {translateType(type)}
            </span>
          ))}
        </div>
        <button onClick={onClickHandler}>Ver Detalle</button>
      </div>
    </div>
  );
};
