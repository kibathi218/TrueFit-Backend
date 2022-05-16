'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Joe',
            lastName: 'Manning',
            email: 'joe@email.com',
            passwordDigest: '123',
            height: '5ft 9in',
            weight: 145,
            createdAt: new Date(),
            updatedAt: new Date()
  
        }
        
      ],
      
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
