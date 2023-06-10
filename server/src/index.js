const express = require('express');
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan")

server.use(morgan("dev"))
server.use(express.json())

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use("/rickandmorty", router) // esto es un middleware que le añade rickandmorty a cada una de las rutas

server.listen(PORT, () => {  
   console.log('Server raised in port: ' + PORT);
});