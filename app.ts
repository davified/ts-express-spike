import express from "express";
import userController from './controllers/user.controller'
import bodyParser from 'body-parser'
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local_db', { useNewUrlParser: true });


// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/users', async (req, res) => {
  const { name } = req.body
  try {
    const user = await userController.createUser({ name })
    res.json(user)

  } catch (err) {
    res.json(err)
  }

})

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port 3000!");
});
