const { UPDATE } = require("sequelize/lib/query-types")
const {directorModel} = require("../models/models.js")


/* GET ALL */
const traerDirectores = async (req, res) => {
  try {
    const posteos = await directorModel.findAll()
    res.json(posteos)
  } catch (error) {
    res.json({ message: error.message })
  }
}

/* GET BY ID */
const traerDirector = async (req, res) => {
  try {
    const posteo = await directorModel.findByPk(req.params.id)
    res.json(posteo)
  } catch (error) {
    res.json({ message: error.message })
  }
}

/* CREATE */
const crearDirector = async (req, res) => {
  try {
    await directorModel.create(req.body)
    res.json("Registro creado correctamente");

  } catch (error) {
    res.json({ message: error.message })
  }
}

/* UPDATE */
const actualizarDirector = async (req, res) => {
  try {
    await directorModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json("Registro Actualizado Correctamente")
  } catch (error) {
    res.json({ message: error.message })
  }
}

/* DELETE */
const borrarDirector = async (req, res) => {
  try {
    await directorModel.destroy({
      where: { id: req.params.id }
    })
    res.json("Registro Borrado Correctamente")
  } catch (error) {
    res.json({ message: error.message })
  }
}

module.exports = { traerDirectores, traerDirector, crearDirector, actualizarDirector, borrarDirector }