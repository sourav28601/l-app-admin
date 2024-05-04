'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CloathsItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CloathsItem.init({
    order_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    special_instruction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CloathsItem',
  });
  return CloathsItem;
};