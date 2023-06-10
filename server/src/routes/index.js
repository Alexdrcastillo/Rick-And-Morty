const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharbyId");
const { handleFavorites, postFav, deleteFav } = require("../controllers/handleFavorites");
const router = require("express").Router(); // router de express


router.get("/character/:id", (req, res) => {
     getCharById(req,res); // se le pasa el controller el req y es res por que el controllers no le llega ese req y res
});

router.get("/login", (req, res) => {
      login(req, res) // esta es la funcion que viene de controllers
});


router.post("/fav", (req, res) => {
     postFav(req, res)
});


router.delete("/fav/:id", (req, res) => {
        deleteFav(req, res)
});


module.exports = router;

