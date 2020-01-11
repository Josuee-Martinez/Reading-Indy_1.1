require("dotenv").config();
const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const connectDBase = require("./db");

connectDBase();

// const reviews = require("./routes/reviews");
const auth = require("./routes/auth");

app.use(express.json());

// app.use(cookieParser());

// app.use("/api/reviews", reviews);
app.use("/api/users", auth);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
