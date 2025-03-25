export const PokemonListItem = (
    {
        code,
        name,
        url,
        imgSprite = 'https://picsum.photos/id/2/48/48',
        onClickHandler = (e)=>{alert('Clicked');}
    }
)=>{
    return (
        <div className="pokemonListItem">
            <img src={imgSprite} alt={name}/>
            <div>
                <strong>
                    {name}
                </strong>
            <button onClick={onClickHandler}>Ver Detalle</button>
            </div>
        </div>
    );
}