'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseDiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExerciseDiary.init({
    userId: DataTypes.INTEGER,
    caloriesBurned: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    date: DataTypes.DATE,
    exerciseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExerciseDiary',
    tableName: 'exerciseDiaries'
  });
  return ExerciseDiary;
};