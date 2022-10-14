const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bred_for: {
      type: DataTypes.STRING,
      allowNull: false
    },

    breed_group: {
      type: DataTypes.STRING,
      allowNull: false
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },

    temperament: {
      type: DataTypes.STRING,
      allowNull: false
    },

    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {timestamps: false});
};
