'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     *
     * 
     * queryInterface.addColumn('tableA', 'columnC', Sequelize.STRING, {
        after: 'columnB' // after option is only supported by MySQL
      }); 
     */


    return queryInterface.addColumn('Renters')
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
