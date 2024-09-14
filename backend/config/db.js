const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Make sure to include useNewUrlParser and useUnifiedTopology to prevent warnings
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mern-new');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
