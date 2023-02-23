import "dotenv/config";
import models from "../models/init-models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    const user = await models.user.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(404).send({ error: "username not found." });
    }
    const isPaswordValid = bcrypt.compareSync(password, user.password);

    if (!isPaswordValid) {
      return res.status(401).send({ error: "invalid password." });
    }

    const token = jwt.sign({ nomorTogel: user.id }, process.env.SECRET_KEY);
    //parameter pertama jwt sign adalah json, param ke 2 adalah secret key

    res.status(200).send({
      message: "Berhasil Login",
      username: user.username,
      accessToken: token,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await models.user.create({
      username,
      password: bcrypt.hashSync(password, 8),
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// const checkAuth = async (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     let verivyToken = await jwt.verify(authorization, process.env.SECRET_KEY);
//     console.log(verivyToken);
//     if (!verivyToken.nomorTogel) {
//       return res.status(401).send({ message: "token is invalid" });
//     }

//     // set user id ke dalam request agar dapat digunakan di middleware selanjutnya
//     // req.userId = decoded.id;

//     next();
//   } catch (error) {
//     res.status(400).send({
//       message: "error from server or your not authenctication",
//     });
//   }
// };

const checkAuth = (req, res, next) => {
  try {
    if (!req.headers.hasOwnProperty("authorization")) {
      return res.status(401).send({ message: "Authorization header missing" });
    }
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    next();
    req.userData = decoded;
  } catch (error) {
    res.status(401).send(error);
  }
};

export default {
  login,
  register,
  checkAuth,
};
