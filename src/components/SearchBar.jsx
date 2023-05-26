import React, { useState } from 'react'

export const SearchBar = (props) => {

  const [character, setCharacter] = useState("")
  const handleChange = (event) => {
        const value = event.target.value
        setCharacter(value)
  }

  return (
    <div>
         <input id="search" onChange={handleChange} />
         <button onClick={() => props.onSearch(character)}>Agregar</button> 
    </div>
 )
}
