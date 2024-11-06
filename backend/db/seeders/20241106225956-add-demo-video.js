'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Videos', [
      {
        userId: 1,
        title: 'demo video',
        description: 'this is a demo video upload test',
        videoUrl: 'https://aaprojects.s3.us-west-1.amazonaws.com/032baa296c4a4d919e92219665461597.mp4'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Videos')
  }
};
