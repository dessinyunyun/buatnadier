const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productPercategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    category_produk: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productPercategory',
    schema: 'public',
    timestamps: false
  });
};
