const db = require ("../data/db.js");
const {DataTypes} = require ("sequelize");

const peliculaModel = db.define ("Peliculas", {
    Id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name : {type:DataTypes.STRING},
    CreatedAt : {type:DataTypes.DATE},
    UpdatedAt : {type:DataTypes.DATE},
    Genre : {type:DataTypes.STRING},
    Score : {
        type:DataTypes.DECIMAL,
        validate: {
            min: 0.5,
            max: 5
        }
    },
    DirectorId: {
        type:DataTypes.INTEGER,
        references: {
            model: 'Directores',
            key: 'Id'
        }
    },
    Status : {type:DataTypes.BOOLEAN}
});

const directorModel = db.define("Directores", {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FirstName: {type: DataTypes.STRING},
    LastName: {type: DataTypes.STRING},
    CreatedAt: {type: DataTypes.DATE},
    UpdatedAt: {type: DataTypes.DATE}
});

module.exports = {peliculaModel, directorModel};