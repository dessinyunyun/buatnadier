import models, { sequelize } from "../models/init-models";
// import user from "./user";

// Menampilkan informasi customer dan accountnya(username,password) ------------------ *
const getCustommerInformation = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      attributes: ["id", "firstname", "lastname"],
      include: [
        {
          model: models.user,
          attributes: ["username", "password"],
          as: "user",
        },
      ],
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Menampilkan informasi customer dan detail ordernya ------------------ *
const getCustomerDetailOrder = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      attributes: ["id", "firstname", "lastname"],
      include: [
        {
          model: models.user,
          attributes: ["username"],
          as: "user",
          include: [
            {
              model: models.orders,
              attributes: ["totalproduct", "totalprice"],
              as: "orders",
              include: [
                {
                  model: models.order_detail,
                  attributes: ["quantity", "order_id", "product_id"],
                  as: "order_details",
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Menampilkan informasi produk per category ------------------ *
const getProdukBycategory = async (req, res) => {
  try {
    const result = await models.product.findAll({
      attributes: ["id", "name", "description", "price", "image"],
      include: [
        {
          //   where: { name: req.params.name },
          model: models.product_category,
          attributes: ["name"],
          as: "category",
        },
      ],
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// views
const getCustommerInformations = async (req, res) => {
  try {
    const result = await models.customerInformasiAndAccount.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getCustomerDetailOrders = async (req, res) => {
  try {
    const result = await models.customerOderDetail.findAll();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default {
  getCustommerInformation,
  getProdukBycategory,
  getCustomerDetailOrder,
  getCustomerDetailOrders,
  getCustommerInformations,
};
