const express = require("express");
const app = express();

const reviews = require("./routes/reviews");

app.use(express.json());

app.use("/api/reviews", reviews);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Express server running on port 3000"));
