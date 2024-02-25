const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");
const { NODE_ENV, APP_URL } = process.env;
const connectDb = require("./src/config/dbConfig");
const fs = require("fs");
const specs = require("./swagger")
const swaggerUI = require("swagger-ui-express");

const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

if (NODE_ENV === "production") {
  connectDb();
}

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/v1/contact", require("./src/routes/contactRoutes"));
app.use("/api/v1/project", require("./src/routes/projectRoutes"));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World maxwell!");
});

app.listen(PORT, () => {
  console.log("===========================================");
  console.log(`Server running on port ${PORT}`);
  console.log("===========================================");
  console.log("\n");
});
