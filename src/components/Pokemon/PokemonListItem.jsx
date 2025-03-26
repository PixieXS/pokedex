export const PokemonListItem = ({
    name,
    imgSprite = "https://picsum.photos/id/2/48/48",
    onClickHandler = (e) => {
      alert("Clicked");
    },
    pokemonNumber,
    pokemonTypes = [],
  }) => {
    return (
      <div className="pokemonListItem">
        <img src={imgSprite} alt={name} />
        <div>
          <span className="pokemonNumber">N.º {pokemonNumber}</span>
          <h2>{name}</h2>
          <div className="pokemonTypes">
            {pokemonTypes.map((type) => (
              <span key={type} className={`type-${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
          <button onClick={onClickHandler}>Ver Detalle</button>
        </div>
      </div>
    );
  };
  