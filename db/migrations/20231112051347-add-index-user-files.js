'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('attachments', 'index', {
        allowNull: false,
        defaultValue:'-',
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('video_clips', 'index', {
        allowNull: false,
        defaultValue:'-',
        type: Sequelize.STRING
      }),
    ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('attachments', 'index', {}),
      queryInterface.removeColumn('video_clips', 'index', {}),
    ])
  }
};
