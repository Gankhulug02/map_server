const mongoose = require("mongoose");

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MONGO_DB_CONNECTED");
  } catch (error) {
    console.log("MONGO_DB_ERROR");
  }
};

module.exports = connectDb;
