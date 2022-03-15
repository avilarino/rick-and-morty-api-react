import Navbar from "./components/Navbar"
import CharacterList from "./components/Characters";
import Pagination from "./components/Pagination"

import React, {useEffect, useState} from "react"

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const url = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }


  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious} 
            onNext={onNext}/>
      <CharacterList characters={characters} />
      <Pagination />

    </>
  )
}

export default App;
