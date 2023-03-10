const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model
  {
    static associate(models) {
      File.belongsTo(models.Topic);
    }
  } File.init({
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'File'
  });
  return File;
};
