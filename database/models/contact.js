'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    static associate(models) {
    }
  }
  contact.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};