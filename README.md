# Introduction:

This is a full stack MERN application. It is a platform for asking MERN stack questions. Users
can submit their error messages and get responses back from other users as to how to debug or
resolve the error message as well as ask general theoretical questions about the coding in the
MERN ecosystem. The idea is to provide the user with a relevant and ideally nothing but one consolidated response that will expedite the process of resolving errors in the debugging process. This MVP demonstrates full CRUD functionality and serves as the basis for further development.

![create-new-question-frontend](https://github.com/oachamfo/mern-stack-learning-platform-backend/assets/137902681/ca758470-bab2-4974-9403-49de5eeb5e3e)

![the_backend_vs_code_1](https://github.com/oachamfo/mern-stack-learning-platform-backend/assets/137902681/ded97a2b-1334-45d1-bea6-9d4179ce1737)

# Technologies Used:

In the backend some of the primary installs included mongoose, express, cors, and dotenv. The Mongodb Atlas platform was used to provide functionality for the backend application to communicate with a Mongodb database, so a database installation was not needed. Mongoose is an ODM that allows for a cleaner syntax by allowing properties of documents in the db to be accessed as if the documents were JS objects. Express is a web framework that runs in the Node.js environment and consumes data from the db and serves the data to the client. Cors is an npm package that allows the server to provide resources to clients from another origin (cross origin resource sharing), and dotenv allows for values in the dotenv file to be accessed using variables in the code. In the frontend, React, a JS frontend library was used in its framework form through Create React App, via the command npx create-react-app, with npx being the wizard, that is to say the installer. The npx create-react-app app serves as the client to the backend Express server and also serves as the UI for the user.

# Getting Started:

## Links to the project's deployed app:

### Frontend Render Deployment:

https://mern-stack-questionandanswer-frontend.onrender.com/

### Backend Render Deployment:

https://mern-stack-questionandanswer-backend.onrender.com

### Frontend Github repo:

https://github.com/oachamfo/mern-stack-learning-platform-frontend

### Backend Github repo:

https://github.com/oachamfo/mern-stack-learning-platform-backend

# Unsolved Problems:

The frontend deploys to Render and Github Pages, but behaves in a quirky way with the links than it does on the localhost. Although the problems after deployment were resolved, further investigation is needed to have a deeper understanding into why those problems happened in the production environment but not in the development environment on the localhost. The problems in production were resolved by trial and error: forming a hypothesis and testing the hypothesis until a solution was reached. Doing online research did not always return sensical or relevant results.

More research is also needed into how contemporary machine learning, namely approaches based on statistical models and AI can be used to return a single source of truth for the user's question.

# Future Enhancements:

Some future features and enhancements planned for the project is to include a search feature and AI into the program to target the responses. In contrast to major platforms like StarkOverflow, the idea is to reduce the number of responses and ideally return a single response that will get as close as possible to the ultimate truth for the user's needs. The philosophy is to use AI, and to a broader scope, machine learning based on statistical models to provide an ultimate source of truth instead of a hundred different ways of doing one thing. If a user searches for an error message or asks a question, providing numerous responses is overwhelming. Ideally, there is but the truth, and the truth is only one, and if not, in the meantime, the best top three responses will suffice, but not the ideal. Even in giving a few variety in responses to the user, there has to be one platform that is a single source of truth that aggregates data for there to be more harmony in the MERN ecosystem. The concept is to scope the world wide web, and be that platform that provides that consolidated single source of truth and return to the user that one targeted ultimate response.

# User Stories:

I can view an index of questions (Index Questions).
I can create a question (Create Question).
I can read a question (Read Question).
I can edit a question (Update Question).
I can delete a question (Delete Note).
I can answer a question (Create Answer).
I can read an answer (Read Answer).

## User Stories Summary:

As a user, I want other users to answer my questions and be able to answer theirs,
while taking back questions I asked by deleting them, and make changes
to a question if I get an afterthought by editing.
