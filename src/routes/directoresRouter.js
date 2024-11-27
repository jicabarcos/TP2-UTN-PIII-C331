const express = require ("express")

const {traerDirectores,traerDirector,crearDirector,actualizarDirector,borrarDirector} = require ("../controllers/directoresControllers.js")

const router = express.Router()

router.get ("/",traerDirectores)
router.get ("/:id",traerDirector)
router.post ("/",crearDirector)
router.put ("/:id",actualizarDirector)
router.delete("/:id",borrarDirector) 

module.exports = router;