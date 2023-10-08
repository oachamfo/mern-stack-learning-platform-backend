//import Mongoose db
const mongoose = require("mongoose");

//create Schema
const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    question: { type: String, required: true },
    isErrorMessage: { type: Boolean, requried: true, default: false },
  },
  { timestamps: true }
);

//create model based on Schema
const Question = mongoose.model("Question", questionSchema);

//export model
module.exports = Question;
