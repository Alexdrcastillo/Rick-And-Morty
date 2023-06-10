import Card from "./Card";
import  styles from "./cards.module.css";
import { addProductToCart } from "../redux/reducer.js/cart/cartSlice";
import { useDispatch } from "react-redux";


function Cards(props) {
    const { characters } = props

    

    
    
    return (
        <div className={styles.container} >       
            {
        characters.map(character => {
            return (
               <div>
                   <Card 
                   key={character.id}
                   name={character.name}
                   species={character.species}
                   gender={character.gender}
                   image={character.image}
                   origin={character.origin.name}
                   onClose={() => props.onClose(character.id)}
                   
                   />
             
               </div> 
            )
        })

            
            }
        </div>
    )
}

export default Cards;