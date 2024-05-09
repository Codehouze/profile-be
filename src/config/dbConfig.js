const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
require("dotenv").config();

// Connection URI
const db_url = process.env.DATABASE_URL;
console.log(db_url);

const connectDb = async () => {
  try {
     mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', function () {
      console.log('Mongoose connected successfully');
      if (mongoose.connection.readyState === 1) {
        console.log("database connected");
      }
    });

    mongoose.connection.on('error', function (err) {
      console.error('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
      console.log('Mongoose disconnected');
    });

  } catch (error) {
    console.log("database connection error");
  }
}

module.exports = connectDb;