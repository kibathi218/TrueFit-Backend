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
      ExerciseDiary.belongsTo(models.User, {foreignKey: 'userId'})
      ExerciseDiary.hasMany(models.Exercise, {foreignKey: 'exerciseDiaryId'})
    }
  }
  ExerciseDiary.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    caloriesBurned: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ExerciseDiary',
    tableName: 'exerciseDiaries'
  });
  return ExerciseDiary;
};