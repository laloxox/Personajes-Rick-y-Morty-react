import {useEffect, useState} from 'react'
import CharactersList from './components/CharacterList'
import CharacterCard from './components/Charactercard'

function App() {

  const [characters, setCharacters] = useState([])


  useEffect(() => {

    async function fetchData() {
      const response =  await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return <div>
        <h1>Rick y Morty</h1>

        <CharactersList/>
        <CharacterCard/>


        {
          characters.map(character => {
            return (
              <div key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })
        }

      </div>;
    
}

export default App;