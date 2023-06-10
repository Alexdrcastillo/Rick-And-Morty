  import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";

function Card({ id, onClose, name, species, gender, origin, image, }) {
  

  return (


  <div className={styles.container} key={id}>   
      <button onClick={onClose}>X</button>
      <div>
      <img src={image} alt='imagen' />
      <h2 style={{ marginTop: "-50px", marginLeft: "10px",position: "relative",background: "yellow", width: "180px"}}>{name}</h2>
      </div>
      <h2 style={{marginLeft: "-180px", marginTop: "-20px"}}>{species}</h2> 
      <h2 style={{marginRight: "-180px", marginTop: "-50px"}}>{gender}</h2>

       
    </div>
  )
}


    


export default Card