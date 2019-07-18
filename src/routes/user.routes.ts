import asyncHandler from "express-async-handler";
import express from "express";
import userController from "../controllers/user.controller";
import User from "../models/user.model";

const router = express.Router();

router
  .get(
    "/",
    asyncHandler(async (req, res) => {
      const data = await User.find();
      res.send(data);
    })
  )
  .get(
    "/:name",
    asyncHandler(async (req, res) => {
      const name = req.params.name;
      const data = await User.findOne({ name });
      res.json(data);
    })
  )
  .post(
    "/",
    asyncHandler(async (req, res) => {
      const { name, about } = req.body;
      const user = await userController.createUser({ name, about });
      res.json(user);
    })
  )
  .put(
    "/:name",
    asyncHandler(async (req, res) => {
      const name = req.params.name;
      const data = await User.findOneAndUpdate({ name }, req.body, {
        new: true,
      });
      res.send(data);
    })
  )
  .delete(
    "/:name",
    asyncHandler(async (req, res) => {
      const name = req.params.name;
      const data = await User.remove({ name });
      res.send(data);
    })
  );

module.exports = router;
