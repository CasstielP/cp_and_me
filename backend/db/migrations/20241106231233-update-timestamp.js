'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Videos', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    await queryInterface.changeColumn('Videos', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  down: async (queryInterface, Sequelize) =>{
    await queryInterface.changeColumn('Videos', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: null,
    });
    await queryInterface.changeColumn('Videos', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: null,
    })
  }
};
