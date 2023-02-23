const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'product_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
