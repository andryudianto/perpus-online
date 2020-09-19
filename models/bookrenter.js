'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookRenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookRenter.init({
    bookId: DataTypes.INTEGER,
    renterId: DataTypes.INTEGER,
    dateOrder: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'BookRenter',
  });
  return BookRenter;
};