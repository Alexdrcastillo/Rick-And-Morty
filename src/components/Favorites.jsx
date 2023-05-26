import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'



const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {
        myFavorites?.map(fav => {
            return (
                <Card 
                id={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                />
            )
            
            
        })
      }
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)