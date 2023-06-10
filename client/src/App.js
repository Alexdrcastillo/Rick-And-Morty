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
import { useSelector, useDispatch } from 'react-redux'
import { setUser, unsetUser } from './redux/reducer.js/cart/cartSlice';
import axios from "axios"

function App(){
  

  const [access, setAccess] = useState(false);

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => { // desestructuarion de response.data
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

 useEffect(()=> {
    access
 }, [access])

  return (
    <div className="App">
       <Home /> 
    </div>
  );
} 

export default App;
