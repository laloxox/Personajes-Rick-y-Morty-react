import CharacterList from './components/CharacterList';




function App() {


  return  <div className='text-white'>
          <h1 className='text-center text-info fw-bold display-1 py-4 '>Rick y Morty</h1>
          <h4 className='text-center text-secondary fw-bold display-4 py-0 '>characters</h4>

            <CharacterList/>

          </div>;
    
}

export default App;