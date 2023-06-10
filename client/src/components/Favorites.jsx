import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import styles from "./fav.module.css"
import Navbar from './Navbar'



const Favorites = ({ character }) => {
 
     const [mostrar, setMostrar] = useState(false)
 
      

  return (
    <div className={styles.container}>
     <button onClick={() => setMostrar(!mostrar)}>❤️</button>
     {mostrar && <div className={styles.div} style={{backgroundColor: "lightgoldenrodyellow", height: "600px", borderRadius: "15px ", marginLeft: "-1000px" , color: "red"}}>
           
       hoa

      </div>}
    </div>
  )
}



export default Favorites;