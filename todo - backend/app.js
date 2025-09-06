// Load environment variables
require("dotenv").config();

// External Modules
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

// Models
const TodoItem = require("./models/TodoItem");

// Local Modules
const todoitemsRouter = require("./routes/todoitemsRouter");
const errorsController = require("./controllers/errors");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todo", todoitemsRouter);

// 404 Page not found
app.use(errorsController.pageNotFound);

// Use variables from .env
const PORT = process.env.PORT || 3005;
const DB_URI = process.env.MONGO_URI;

// Connect to mongoDB and start server
mongoose.connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log("Error while connecting to mongo:", err);
  });
