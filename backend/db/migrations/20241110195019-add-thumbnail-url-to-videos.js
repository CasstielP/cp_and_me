'use strict';

const { query } = require('express');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Videos', 'thumbnailUrl', {
      type: Sequelize.STRING,
      allowNull: true,  
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Videos', 'thumbnailUrl');
  }
};
