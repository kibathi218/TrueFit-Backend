'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodDiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FoodDiary.belongsTo(models.User, {foreignKey: 'userId'})
      FoodDiary.hasMany(models.Food, {foreignKey: 'foodId'})
    }
  }
  FoodDiary.init({
    userId: DataTypes.INTEGER,
    calories: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    date: DataTypes.DATE,
    foodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodDiary',
    tableName: 'foodDiaries'
  });
  return FoodDiary;
};