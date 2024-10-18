require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

// Set strictQuery option
mongoose.set("strictQuery", false); // Change to true if you want to suppress the warning

const uri = process.env.MONGO_URI; // Make sure this matches the variable in your .env file
console.log("MongoDB URI:", uri); // Log the URI

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
