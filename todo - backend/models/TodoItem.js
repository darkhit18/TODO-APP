const mongoose = require("mongoose");

const TodoitemSchema = mongoose.Schema(
  {
    task: {
      // changed from title to task
      type: String,
      required: [true, "First name is required"],
    },
    date: Date,
    completed: {
      // changed from isCompleted to completed
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Add timestamps option to automatically manage createdAt and updatedAt fields
);

module.exports = mongoose.model("TodoItem", TodoitemSchema);
