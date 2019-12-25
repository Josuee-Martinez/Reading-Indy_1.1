require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require("./middleware/error");
const connectDBase = require("./db");

connectDBase();

const reviews = require("./routes/reviews");
const auth = require("./routes/auth");

app.use(express.json());

app.use("/api/reviews", reviews);
app.use("/api/users", auth);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
