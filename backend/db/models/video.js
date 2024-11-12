//testing github connection 
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
          model: 'Users', //match the table name: Users
          key: 'id'
        }

    },
    title: {type: DataTypes.STRING,
        allowNull: false


    },
    description: {type: DataTypes.TEXT,
      allowNull: false
      
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
      defaultValue: 'https://cp-and-me.s3.us-west-1.amazonaws.com/images/Screenshot+2024-11-12+at+9.16.22%E2%80%AFAM.png'
    }

  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'Videos'
  });
  return Video;
};