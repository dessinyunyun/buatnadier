import models from "../models/init-models";

const getUsers = async (req, res) => {
  try {
    const result = await models.user.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findOne({
      where: { id },
      attributes: { exclude: ["password"] },

      // kalau ingin menyertakan semua kolom
      //   attributes: { include: [], exclude: [] },
      //   include: [{ all: true }],
    });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(200).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await models.user.create({
      username,
      password,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(200).send({ message: "user not found" });
    }

    const { nama, password } = req.body;
    const result = await user.update({
      nama,
      password,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findOne({
      where: { id },
    });

    if (!user) {
      return res.send("user not found");
    }

    await models.user.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({ message: "user berhasil dihapus" });
  } catch (error) {
    res.status(400).send(error);
  }
};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
