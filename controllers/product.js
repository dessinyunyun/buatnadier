import models from "../models/init-models";
const path = require("path");
import uploads from "../middleware/upload.js";
const fs = require("fs");

const deleteImageInFile = (imagePath) => {
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File replace successfully");
  });
};

const addProduct = async (req, res) => {
  try {
    let image;
    await uploads(req, res);
    if (req.file) {
      image = req.file.filename;
    }

    const { name, description, price, category_id } = req.body;
    const result = await models.product.create({
      name,
      description,
      price,
      image,
      category_id,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    await uploads(req, res);
    const { id } = req.params;
    const product = await models.product.findOne({
      where: { id },
    });
    if (!product) {
      return res.send("product not found");
    }

    let image;
    if (req.file) {
      image = req.file.filename;
      const imagePath = path.join(__dirname, "../uploads", product.image);
      deleteImageInFile(imagePath);
    }

    const { name, description, price, category_id } = req.body;
    const result = await product.update({
      name,
      description,
      price,
      category_id,
      image,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getImage = async (req, res) => {
  try {
    const imagePath = path.join(__dirname, "../uploads", req.params.image);
    res.status(200).sendFile(imagePath);
  } catch (error) {
    console.log(error);
    res.status(500).send("Terjadi kesalahan pada server");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await models.product.findOne({
      where: { id },
    });
    if (!product) {
      return res.send("product not found");
    }

    await models.product.destroy({
      where: {
        id,
      },
    });
    const imagePath = path.join(__dirname, "../uploads", product.image);
    deleteImageInFile(imagePath);

    res.status(200).send({ message: "product berhasil dihapus" });
  } catch (error) {
    res.status(400).send(error);
  }
};

export default {
  addProduct,
  getImage,
  deleteProduct,
  updateProduct,
};
