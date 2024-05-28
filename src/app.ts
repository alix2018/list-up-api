// import express from "express";
// import { connectDb } from "./config/db";

// const app = express();
// connectDb();

// const port = 3020;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
//   // TODO: Send data from MongoDB database
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
