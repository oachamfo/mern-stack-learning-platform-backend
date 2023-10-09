//import Mongoose db
const mongoose = require("mongoose");

//create Schema
const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    errorMessage: { type: String, required: false },
    question: { type: String, required: false },
    hasErrorMessage: { type: Boolean, requried: true, default: false },
  },
  { timestamps: true }
);

//create model based on Schema
const Question = mongoose.model("Question", questionSchema);

//export model
module.exports = Question;
