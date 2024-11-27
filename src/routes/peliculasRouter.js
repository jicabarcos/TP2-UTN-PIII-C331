const express = require ("express")

const {traerPeliculas,traerPelicula,crearPelicula,actualizarPelicula,borrarPelicula} = require ("../controllers/peliculasControllers.js")

const router = express.Router()

router.get ("/",traerPeliculas)
router.get ("/:id",traerPelicula)
router.post ("/",crearPelicula)
router.put ("/:id",actualizarPelicula)
router.delete("/:id",borrarPelicula) 

module.exports = router;