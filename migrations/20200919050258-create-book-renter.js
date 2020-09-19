'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookRenters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      renterId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateOrder: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BookRenters');
  }
};