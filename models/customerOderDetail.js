const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerOderDetail', {
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
    kategori: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalproduct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customerOderDetail',
    schema: 'public',
    timestamps: false
  });
};
