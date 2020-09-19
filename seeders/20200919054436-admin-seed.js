'use strict';

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
   return queryInterface.bulkInsert('Admins', [
     {
       username: 'John Doe',
       password: '12345',
       email: 'johndoe@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
     },
    {
      username: 'Jane Doe',
       password: '12345',
       email: 'janedoe@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
