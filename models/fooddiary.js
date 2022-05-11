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
      FoodDiary.hasMany(models.Food, {foreignKey: 'foodDiaryId'})
    }
  }
  FoodDiary.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    foodName: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    date: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'FoodDiary',
    tableName: 'foodDiaries'
  });
  return FoodDiary;
};