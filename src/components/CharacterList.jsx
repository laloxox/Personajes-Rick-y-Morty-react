import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard';


function CharacterList() {

        const [characters, setCharacters] = useState([]);


        useEffect(() => {
            async function fetchData() {
            const response =  await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
            }

            fetchData();
        }, []);



    return (
        <div>
            {characters.map((character) => {
                return (
                    <CharacterCard key={character.id} character={character}/>
                );
            })}
        </div>
    );
}

export default CharacterList;