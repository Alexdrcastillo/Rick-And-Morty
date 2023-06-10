import React from 'react'
import { SearchBar } from './SearchBar'
import Favorites from './Favorites';




const Navbar = (props) => {
    return (
      <div>
        <SearchBar onSearch={props.onSearch} />

    </div>
  )
}

export default Navbar