'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'exerciseDiaries',
      [
        {
          userId: 1,
          exerciseName: "Jogging (Treadmill)",
          caloriesBurned: 120,
          time: 30,
          date: "5/14/22",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          userId: 1,
          exerciseName: "Stationary Bike",
          caloriesBurned: 200,
          time: 30,
          date: "5/14/22",
          createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          userId: 1,
          exerciseName: "Elliptical",
          caloriesBurned: 50,
          time: 10,
          date: "5/14/22",
          createdAt: new Date(),
            updatedAt: new Date()
        }
      ],
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exerciseDiaries', null, {})
  }
};

