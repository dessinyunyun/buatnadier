import { Router } from "express";
import userController from "../controllers/user";
import tugas from "../controllers/tugasController";
import product from "../controllers/product";
import auth from "../controllers/auth";

import multer from "multer";

const router = new Router();

// AUTH
{
  router.post("/login", auth.login);
  router.post("/register", auth.register);
}

// tugas
{
  router.get("/customers", auth.checkAuth, tugas.getCustommerInformation);
  router.get("/product", auth.checkAuth, tugas.getProdukBycategory);
  router.get("/orders", auth.checkAuth, tugas.getCustomerDetailOrder);
  router.get("/orderDetail", auth.checkAuth, tugas.getCustomerDetailOrders);
  router.get(
    "/customerInformation",
    auth.checkAuth,
    tugas.getCustommerInformations
  );
}

// file upload
{
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "uploads"); // menyimpan file di folder uploads
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname); // membuat nama file unik dengan waktu upload
  //   },
  // });
  // const fileFilter = (req, file, cb) => {
  //   if (
  //     file.mimetype === "image/png" ||
  //     file.mimetype === "image/jpg" ||
  //     file.mimetype === "image/jpeg"
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //   }
  // };
  // let uploads = multer({
  //   storage: storage,
  //   fileFilter,
  // });

  router.post("/products", product.addProduct);
  router.get("/uploads/:image", product.getImage);
  router.delete("/product/:id", product.deleteProduct);
  router.put("/product/:id", product.updateProduct);
}

// iseng
{
  router.get("/user", userController.getUsers);
  router.get("/user/:id", userController.getUser);
  router.post("/user", userController.createUser);
  router.put("/user/:id", userController.updateUser);
  router.delete("/user/:id", userController.deleteUser);
}

export default router;
