'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isbn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      publishedDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      authors: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Books');
  }
};