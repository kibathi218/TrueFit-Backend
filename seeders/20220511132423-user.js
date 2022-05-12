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
          weight: 155,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {
        firstName: 'Joe',
          lastName: 'Manning',
          email: 'joe@email.com',
          password: '123',
          height: '5ft 9in',
          weight: 145,
          createdAt: new Date(),
          updatedAt: new Date()

      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
