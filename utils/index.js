const mongoose = require("mongoose");

async function connectToDb() {
  await mongoose.connect("mongodb://localhost:27017/express-api");
  console.log("Connected to MongoDB");
}

module.exports = { connectToDb };
