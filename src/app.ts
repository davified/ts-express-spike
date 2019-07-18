import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const UserRouter = require("./routes/user.routes");

mongoose.connect("mongodb://localhost:27017/local_db", {
  useNewUrlParser: true,
});

const app: express.Application = express();
app.use(bodyParser.json());
app.use("/users", UserRouter);
app.get("/*", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port 3000!");
});
