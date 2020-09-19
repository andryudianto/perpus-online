'use strict';

const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
data = data.map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()

  return el
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Books', data, {});

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Books', null, {});
  }
};
