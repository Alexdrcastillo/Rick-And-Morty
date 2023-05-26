import Card from './components/Card';
import './App.css';
import Cards from './components/Cards';
import { SearchBar } from './components/SearchBar';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Favorites from './components/Favorites';


function App() {
  
  return (
    <div className="App">
      <Link to="/">Home</Link>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
} 

export default App;
