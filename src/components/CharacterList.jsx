import {useEffect, useState} from "react";
import CharacterCard from './CharacterCard';


function NavPage (props) {



    return (
        <header className="d-flex justify-content-between aling-items-center py-3">
            <button className="btn btn-success" onClick={() => props.setPage(props.page - 1)}>
                Anterior
            </button>

            <span className="badge ">Page #{props.page}</span>

            <button className="btn btn-success" onClick={() => props.setPage(props.page + 1)}>
                Siguiente
            </button>
        </header>

    )
    
}

    {/* 👇️ scroll to top on button click */}

    function ScrollToTop() {

        return(
            <div className="d-flex justify-content-center aling-items-center">
            <button type="button" className="btn btn-primary" 
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>Top</button>
            </div>
        )
    }


function CharacterList() {

        const [characters, setCharacters] = useState([]);
        const [loading, setLoading ] = useState(true);
        const [page, setPage] = useState(1)


        useEffect(() => {
            async function fetchData() {
            const response =  await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results);
            }

            fetchData();
        }, [page]);

    



    return (
        <div className='container '>

            <NavPage page={page} setPage={setPage}/>

            {
                loading ? ( <h1>Loading....</h1> ) : (

                <div className='row'>
                    {characters.map((character) => {
                        return (
                            <div className='col-md-4' key={character.id}>
                                <CharacterCard  character={character} />
                            </div>
                    
                        );
                
                    })}
                </div>
            )}
            <NavPage page={page} setPage={setPage}/>

            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default CharacterList;