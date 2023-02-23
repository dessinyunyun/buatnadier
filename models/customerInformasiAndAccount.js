const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerInformasiAndAccount', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customerInformasiAndAccount',
    schema: 'public',
    timestamps: false
  });
};
