# Introduction:

This is a full stack MERN application. It is a platform for asking MERN stack questions. Users
can submit their error messages and get responses back from other users as to how to debug or
resolve the error message as well as ask general theoretical questions about the coding in the
MERN ecosystem. The idea is to provide the user with a relevant and ideally nothing but one consolidated response that will expedite the process of resolving errors in the debugging process.

# Technologies Used:

In the backend some of the primary installs included mongodb, mongoose, express, cors, and dotenv. The mongodb install provides functionality for the backend application to communicate with the db. Mongoose is an ODM that allows for a cleaner syntax by allowing properties of documents in the db to be accessed as if the documents were JS objects. Express is a web framework that runs in the Node.js environment and consumes data from the db and serves the data to the client. Cors is an npm package that allows the server to provide resources to clients from another origin (cross origin resource sharing), and dotenv allows for values in the dotenv file to be accessed using variables in the code. In the frontend, React, a JS frontend library was used in its framework form through Create React App, via the command npx create-react-app, with npx being the wizard, that is to say the installer. The npx create-react-app app serves as the client to the backend Express server and also serves as the UI for the user.

# Getting Started:

## Links to the project's deployed app:

### Backend Github repo:

https://github.com/oachamfo/mern-stack-learning-platform-backend

### Frontend Github repo:

https://github.com/oachamfo/mern-stack-learning-platform-frontend

# Unsolved Problems:

The frontend deploys to Render and Github Pages, but behaves in a quirky way than it does on the localhost.

# Future Enhancements:

Some future features and enhancements planned for the project is to include a search feature and AI into the program to target the responses. In contrast to major platforms like StarkOverflow, the idea is to reduce the number of responses and ideally return a single response that will get as close as possible to the ultimate truth for the user's needs. The philosophy is to use AI, and to a broader scope, machine learning based on statistical models to provide an ultimate source of truth instead of a hundred different ways of doing one thing. If a user searches for an error message or asks a question, providing numerous responses is overwhelming. Ideally, there is but the truth, and the truth is only one, and if not, in the meantime, the best top three responses will suffice, but not the ideal. Even in giving a few variety in responses to the user, there has to be one platform that is a single source of truth that aggregates data for there to be more harmony in the MERN ecosystem. The concept is to scope the world wide web, and be that platform that provides that consolidated single source of truth and return to the user that one targeted ultimate response.

# User Stories:

As a user, I want other users to answer my questions and be able to answer theirs,
while taking back questions I asked by deleting them, and make changes
to a question if I get an afterthought by editing.

I can create a question.
I can read a question.
I can edit a question.
I can delete a question.
I can answer a question.
