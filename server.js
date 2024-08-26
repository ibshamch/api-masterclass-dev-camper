const express = require("express");
const dotenv = require("dotenv");

// Route Files
const bootcamps = require("./routes/bootcamps"); // this is router basically

dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps); // Base URL

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
