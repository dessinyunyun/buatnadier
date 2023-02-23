import multer from "multer";
import { promisify } from "util";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // menyimpan file di folder uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // membuat nama file unik dengan waktu upload
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploads = multer({
  storage: storage,
  fileFilter,
}).single("image");

const uploadFileMiddleware = promisify(uploads);

export default uploadFileMiddleware;
