const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      unique: "customer_user_id_key"
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
    tableName: 'customer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "customer_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
