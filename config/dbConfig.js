// const mongoose = require("mongoose");

// mongoose.connect(process.env.mongo_url)

// const connection = mongoose.connection

// connection.on("connected", () => {
//   console.log("Mongo DB Connection Successfull");
// });

// connection.on("error", () => {
//   console.log("Mongo DB Connection failed");
// });

// module.exports = mongoose;

const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;