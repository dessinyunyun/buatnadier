// --------------- setelah init, import ini (1) --------------- *
import Sequelize from "sequelize";

// --------------- setelah init, tambah ini (2) --------------- *
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _customerInformasiAndAccount = require("./customerInformasiAndAccount");
var _customerOderDetail = require("./customerOderDetail");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _product = require("./product");
var _productPercategory = require("./productPercategory");
var _product_category = require("./product_category");
var _user = require("./user");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var customerInformasiAndAccount = _customerInformasiAndAccount(
    sequelize,
    DataTypes
  );
  var customerOderDetail = _customerOderDetail(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productPercategory = _productPercategory(sequelize, DataTypes);
  var product_category = _product_category(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  order_detail.belongsTo(orders, { as: "order", foreignKey: "order_id" });
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "order_id" });
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(order_detail, {
    as: "order_details",
    foreignKey: "product_id",
  });
  product.belongsTo(product_category, {
    as: "category",
    foreignKey: "category_id",
  });
  product_category.hasMany(product, {
    as: "products",
    foreignKey: "category_id",
  });
  customer.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasOne(customer, { as: "customer", foreignKey: "user_id" });
  orders.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(orders, { as: "orders", foreignKey: "user_id" });

  return {
    customer,
    customerInformasiAndAccount,
    customerOderDetail,
    order_detail,
    orders,
    product,
    productPercategory,
    product_category,
    user,
  };
}
module.exports = initModels(sequelize);
module.exports.initModels = initModels;
module.exports.default = initModels;
