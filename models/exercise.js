'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exercise.belongsTo(models.ExerciseDiary, {foreignKey: 'exerciseDiaryId'})
    }
  }
  Exercise.init({
    exerciseDiaryId: DataTypes.INTEGER, 
    isCardio: DataTypes.BOOLEAN,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    minutes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exercise',
    tableName: 'exercises'
  });
  return Exercise;
};