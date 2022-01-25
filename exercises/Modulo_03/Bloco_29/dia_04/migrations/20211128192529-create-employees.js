'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firsName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'first_name',
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name',
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
   });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Employees');
  }
};
