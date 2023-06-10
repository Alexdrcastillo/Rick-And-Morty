import React, { useState } from 'react';
import styles from "./searchBar.module.css"

export const SearchBar = (props) => {

  const [character, setCharacter] = useState("")
  const handleChange = (event) => {
        const value = event.target.value
        setCharacter(value)
  }

  return (
    <div className={styles.container}>
         <input className={styles.input} placeholder='Buscar' id="search" onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>Agg</button> 
    </div>
 )
}

