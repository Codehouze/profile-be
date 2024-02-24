const mongoose = require("mongoose");
require("dotenv").config();
// Connection URI
const db_url = process.env.DATABASE_URL;

const connectDb = mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
if (connectDb) {
  console.log("database connected");
} else {
  console.log("database connection error");
}

module.exports = connectDb;
