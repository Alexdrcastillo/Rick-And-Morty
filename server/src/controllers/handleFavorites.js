let myFavorites = [];

const postFav = (req, res) => {
       const character = req.body;
       
       myFavorites.push(character)

       res.status(200).json(myFavorites)
};


const deleteFav = (req, res) => {
    const { id } = req.params; // desestructuracion de id de params

    myFavorites = myFavorites.filter(favorites => favorites.id !== +id); // filtra los favorites que sean diferentes al id que llega por params
                                                                // el +id es por que lo parsea lo vuelve a numero 
    return res.status(200).json(myFavorites);
};




module.exports = {
    postFav,
    deleteFav
}