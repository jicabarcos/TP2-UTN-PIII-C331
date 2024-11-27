const {Sequelize} = require ("sequelize")

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize ("TP2_ProgIII_Cabarcos","root","",{
    host : "localhost",
    dialect:"mysql",
    port: 3824
})

module.exports = db;