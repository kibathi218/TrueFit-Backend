'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.FoodDiary, {foreignKey: 'userId'})
      User.hasOne(models.ExerciseDiary, {foreignKey: 'userId'})
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};