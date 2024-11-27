const express = require("express");
const app = express();
const cors = require("cors");
const peliculasRouter = require("./routes/peliculasRouter.js");
const directoresRouter = require("./routes/directoresRouter.js");
const db = require("./data/db.js");
const {peliculaModel, directorModel} = require("./models/models.js");

app.use(cors());
app.use(express.json());

const port = 3030;

peliculaModel.belongsTo(directorModel, { foreignKey: 'DirectorId' });
directorModel.hasMany(peliculaModel, { foreignKey: 'DirectorId' });

app.use ("/peliculas", peliculasRouter);
app.use ("/directores", directoresRouter);


// conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
        
    }
};

app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);    
});