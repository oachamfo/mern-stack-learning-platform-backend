//initialize controller
const express = require("express");
const router = express.Router();
const Question = require("../models/questions.js");

//seed route
router.get("/seed", (req, res) => {
  Question.create([
    {
      title: "title1",
      category: "entry1",
      question: "question1",
    },
    {
      title: "title2",
      category: "entry2",
      question: "question2",
    },
  ]).catch((err) => {
    console.log(err);
  });
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

/*
//questions new
router.get("/new", (req, res) => {
  res.render("New");
});
*/

//questions delete
try {
  router.delete("/:id", async (req, res) => {
    await Question.findByIdAndRemove(req.params.id);
    res.redirect("/questions"); //redirect back to questions index
  });
} catch {
  console.log("something went wrong...");
}

//questions update
router.put("/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Question.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedQuestion) => {
      console.log(updatedQuestion);
      res.redirect(`/questions/${req.params.id}`); //redirect to the Show page
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

    res.redirect("/questions");
  } catch (error) {
    console.log(error);
  }
});

//questions edit
router.get("/:id/edit", async (req, res) => {
  await Question.findById(req.params.id)
    .then((foundQuestion) => {
      res.render("Edit", {
        question: foundQuestion, //pass in the foundQuestion so we can use it to populate the form
      });
    })
    .catch((err) => {
      res.send({ msg: err.message });
    });
});

//questions show
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    res.render("Show", { question: question });
  } catch (error) {
    console.log(error);
  }
});

//export router object
module.exports = router;
