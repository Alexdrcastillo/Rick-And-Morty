import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import CharacterDetails from './CharacterDetails';
import fondo from "../fondo.mp4"
import Favorites from './Favorites';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(()=> {
      axios.get("https://rickandmortyapi.com/api/character")
       .then(response => {
        setCharacter(response.data)
       })
  }, [])


 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then(response => response.json())
  .then(data => {
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    }else{
      window.alert("no hay")
    }
  })
}

const onClose = id => {
  setCharacters(characters.filter(char => char.id !== id))
}

const handleCardClick = (character) => {
  setSelectedCharacter(character);
}

  return (
    <div>
       
   <video className='videoTag' autoPlay loop muted>
      <source src={fondo} type='video/mp4' />
  </video>


      <Favorites character={character} />
      <Navbar onSearch={onSearch}  />
      <Cards characters={characters} onClose={onClose} onCardClick={handleCardClick} />
  
          </div>
  )
}

export default Home