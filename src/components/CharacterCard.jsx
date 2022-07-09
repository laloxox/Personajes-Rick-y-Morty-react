function CharacterCard({ character }) {
    return (
    <div className="text-center p-5">
        <h2>{character.name}</h2>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name}/>
        <h4 className="text-secondary p-3">Origen: {character.origin.name}</h4>
        <h5 className="text-primary p-1">{character.status}</h5>
    </div>
    );
}

export default CharacterCard;