'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    }
  }
  Video.init({
    userId: {type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }

    },
    title: {type: DataTypes.STRING,
        allowNull: false


    },
    description: {type: DataTypes.TEXT,
      allowNull: false

    },

  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'Videos'
  });
  return Video;
};