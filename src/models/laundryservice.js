'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LaundryService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LaundryService.init({
    service_name: DataTypes.STRING,
    service_description: DataTypes.STRING,
    service_price: DataTypes.STRING,
    service_rating: DataTypes.STRING,
    service_title: DataTypes.STRING,
    service_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LaundryService',
  });
  return LaundryService;
};