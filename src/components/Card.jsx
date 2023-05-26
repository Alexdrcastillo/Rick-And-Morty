  import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../redux/actions"
import { connect } from 'react-redux';

function Card({ id, onClose, name, species, gender, origin, image, addFavorite, deleteFavorite , myFavorites}) {
  
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id)
    }else{ setIsFav(true); addFavorite  ({id, name, species, gender, origin, image}) }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]); 
  
  return (


  <div className={styles.container} key={id}>


      <button onClick={handleFavorite}>{isFav ? "❤️" :"🤍"}</button>
   

      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <h1>{species}</h1> 
      <h1>{gender}</h1>
      <h1>{origin}</h1>
      <img src={image} alt='imagen' />
       
    </div>
  )
}


    const mapStateToProps = (state) => {
return{
  myFavorites: state.myFavorites
}
    }


const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => { dispatch(addFavorite(character)) },
    deleteFavorite : (id) => { dispatch(deleteFavorite(id)) }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);