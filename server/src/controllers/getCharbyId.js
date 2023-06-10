const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
    const { id } = req.params;    // desestructurar id que viene de req.params que es /:id
    axios.get(`${URL}/${id}`) // llamada a la api
        .then(response => response.data)
         .then(({status, name, species, origin, image, gender}) => { // desestructuracion de todo lo que trae la api
             if (name){ // si existe name es que esta llegando un personaje por que id siempre llega
                const character = {
                    id,
                    name,
                    species,
                    origin,
                    image,
                    gender,
                    status
                }
              return res.status(200).json(character)
             }
             return res.status(404).send("not found");
         })
         .catch(error => res.status(500).send(error.mesagge))
           
}


module.exports = {
    getCharById
};