import React from 'react'
import { SearchBar } from './SearchBar'
import { Link, NavLink, Route, Routes } from 'react-router-dom';





const Navbar = (props) => {
  

    return (

    <div>
    
    <Link to="/">
    Home
    </Link>

    <Link to="/Favorites">
    Favorites
    </Link>

        <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default Navbar