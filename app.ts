import asyncHandler from "express-async-handler";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userController from "./controllers/user.controller";
import User from "./models/user.model";

mongoose.connect("mongodb://localhost:27017/local_db", {
  useNewUrlParser: true,
});

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get(
  "/users",
  asyncHandler(async (req, res) => {
    const data = await User.find();
    res.send(data);
  })
);

app.get(
  "/users/:name",
  asyncHandler(async (req, res) => {
    const name = req.params.name;
    const data = await User.findOne({ name });
    res.json(data);
  })
);

app.post(
  "/users",
  asyncHandler(async (req, res) => {
    const { name } = req.body;
    const user = await userController.createUser({ name });
    res.json(user);
  })
);

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port 3000!");
});
