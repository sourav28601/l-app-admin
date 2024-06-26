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
      // define association here
    }
  }
  User.init({
    profile_picture: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    UPI_ID: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    role: DataTypes.STRING,
    address: DataTypes.STRING,
    token:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};