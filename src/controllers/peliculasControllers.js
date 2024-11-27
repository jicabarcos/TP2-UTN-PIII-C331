const { UPDATE } = require("sequelize/lib/query-types")
const {peliculaModel} = require("../models/models.js")


/* GET ALL */
const traerPeliculas = async (req, res) => {
  try {
    // Desestructurar parámetros de la query
    const { page = 1, limit = 10, sort = "ASC", genre, status } = req.query;

    // Construir filtros dinámicamente
    const where = {};
    if (genre) where.Genre = genre; // Si el parámetro `genre` está presente, filtra por `Genre`
    if (status) where.Status = status === "true" ? 1 : 0; // Filtrar por `Status`

    // Convertir `page` y `limit` en valores numéricos
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    // Calcular el desplazamiento (offset) para la paginación
    const offset = (pageNumber - 1) * limitNumber;

    // Realizar la consulta con filtros, orden y paginación
    const posteos = await peliculaModel.findAndCountAll({
      where, // Filtros dinámicos
      order: [["CreatedAt", sort.toUpperCase()]], // Orden por fecha de creación
      limit: limitNumber, // Límite de registros por página
      offset // Desplazamiento
    });

    // Formatear la respuesta para incluir información de paginación
    const totalPages = Math.ceil(posteos.count / limitNumber);
    res.json({
      data: posteos.rows, // Registros obtenidos
      totalItems: posteos.count, // Cantidad total de registros
      currentPage: pageNumber, // Página actual
      totalPages // Cantidad total de páginas
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* GET BY ID */
const traerPelicula = async (req, res) => {
  try {
    const posteo = await peliculaModel.findByPk(req.params.id)
    res.json(posteo)
  } catch (error) {
    res.json({ message: error.message })
  }
}

/* CREATE */
const crearPelicula = async (req, res) => {
  try {
    await peliculaModel.create(req.body)
    res.json("Registro creado correctamente");

  } catch (error) {
    res.json({ message: error.message })
  }
}

/* UPDATE */
const actualizarPelicula = async (req, res) => {
  try {
    await peliculaModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json("Registro Actualizado Correctamente")
  } catch (error) {
    res.json({ message: error.message })
  }
}

/* DELETE */
const borrarPelicula = async (req, res) => {
  try {
    await peliculaModel.destroy({
      where: { id: req.params.id }
    })
    res.json("Registro Borrado Correctamente")
  } catch (error) {
    res.json({ message: error.message })
  }
}

module.exports = { traerPeliculas, traerPelicula, crearPelicula, actualizarPelicula, borrarPelicula }