require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");

connectDB();

const reviews = require("./routes/reviews");

app.use(express.json());

app.use("/api/reviews", reviews);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
