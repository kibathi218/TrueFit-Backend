'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Sam',
          lastName: 'Kibathi',
          email: 'sam@email.com',
          password: '123',
          height: '5ft 7in',
          weight: 155
        }
      ],
      {
        firstName: 'Joe',
          lastName: 'Manning',
          email: 'joe@email.com',
          password: '123',
          height: '5ft 9in',
          weight: 145

      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
