const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host} see all connectionInstance`
    );
  } catch (error) {
    console.log("MongoDB connection Failed: ", error);
    process.exit(1); // read about these code
  }
};

module.exports = { connectDB };
