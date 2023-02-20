const express = require("express");
const cors = require("cors");
const morganMiddleware = require("./middlewares/morganMiddleware");
const taskRoute = require("./routes/TaskRoute");

// The morgan middleware does not need this.
// This is for a manual log
const logger = require("./utils/logger");

const app = express();

// Add the morgan middleware
app.use(morganMiddleware);
app.use(cors());
app.use(express.json());
app.use(taskRoute);

app.get("/api/status", (req, res) => {
  logger.info("Checking the API status: Everything is OK");
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!",
  });
});

app.listen(5000, () => logger.info("Server up and running..."));
