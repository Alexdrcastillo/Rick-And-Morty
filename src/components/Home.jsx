import React, { useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';


const Home = () => {

    
  const [characters, setCharacters] = useState([]);
  const [pers, setPers] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);



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
      <Navbar onSearch={onSearch}  />
      <Cards characters={characters} onClose={onClose} onCardClick={handleCardClick} />
  
          </div>
  )
}

export default Home