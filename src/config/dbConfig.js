const mongoose = require("mongoose");
require("dotenv").config();
// Connection URI
const db_url = process.env.DATABASE_URL;

const connectDb = async () => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("database connection error");
  }
  if (mongoose.connection.readyState === 1) {
    console.log("database connected");
  }
}


module.exports = connectDb;


