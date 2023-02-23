import "dotenv/config";
import express from "express";
import routes from "./routes/indexRoutes.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
