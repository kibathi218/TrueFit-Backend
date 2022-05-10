'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food.init({
    food: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    protein: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Food',
    tableName: 'foods'
  });
  return Food;
};