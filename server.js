const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const bootcamps = require("./routes/bootcamps"); // this is router basically

const connectDB = require("./config/db");

//Load env variables
// We have to load env variables first because mongoURI is in there
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Body Parser
app.use(express.json()); // 1 Middlware

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // 2 Middleware
}

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps); // Base URL  // 3rd Middleware

app.use(errorHandler); // 4rd middleware

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections :
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
