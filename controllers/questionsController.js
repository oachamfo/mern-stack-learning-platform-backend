//initialize controller
const express = require("express");
const router = express.Router();
const Question = require("../models/questions.js");
const Answer = require("../models/answers.js");

//seed route
router.get("/seed", (req, res) => {
  Question.create([
    {
      title: "title1",
      errorMessage: "errorMessage1",
      question: "question1",
      hasErrorMessage: false,
    },
    {
      title: "title2",
      errorMessage: "errorMessage2",
      question: "question2",
      hasErrorMessage: true,
    },
  ]).catch((error) => {
    console.log(error);
  });

  //send message to user; user in this context refers to user of the backend, example developers, not the normal user of the app from the frontend
  res.send("data seeded in db");
});

//questions index
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
  }
});

//questions delete
try {
  router.delete("/:id", async (req, res) => {
    //delete Question and referenced Answers
    const deleted = await Question.findByIdAndRemove(req.params.id); //delete Question
    await Answer.deleteMany({ _id: { $in: deleted.answers } }); //delete referenced Answers
    res.redirect("https://mern-stack-questionandanswer-frontend.onrender.com/"); //refactoring code to work with Render
  });
} catch (error) {
  console.log(error);
}

//questions update
router.put("/:id", (req, res) => {
  if (req.body.hasErrorMessage === "on") {
    req.body.hasErrorMessage = true;
  } else {
    req.body.hasErrorMessage = false;
  }
  Question.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedQuestion) => {
      console.log(updatedQuestion);
      res.redirect(
        `https://mern-stack-questionandanswer-frontend.onrender.com/#/questions/${req.params.id}`
      ); //redirect to the Show page
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//questions create
router.post("/", async (req, res) => {
  try {
    //data correction
    if (req.body.hasErrorMessage === "on") {
      //if radio button is checked by user
      req.body.hasErrorMessage = true; //do some data correction
    } else {
      //if radio button is not checked by user
      req.body.hasErrorMessage = false; //do some data correction
    }

    //store new question in cloud db
    await Question.create(req.body);

    res.redirect("https://mern-stack-questionandanswer-frontend.onrender.com/"); //refactoring code to work with Render
  } catch (error) {
    console.log(error);
  }
});

//questions edit
router.get("/:id/edit", async (req, res) => {
  await Question.findById(req.params.id)
    .then((foundQuestion) => {
      res.json(foundQuestion);
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: err.message });
    });
});

//questions show
router.get("/:id", async (req, res) => {
  try {
    //populate answers arrays in Question object with objects from answers collection
    const question = await Question.findById(req.params.id).populate("answers");
    res.json(question);
  } catch (error) {
    console.log(error);
  }
});

//export router object
module.exports = router;
