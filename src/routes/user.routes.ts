import asyncHandler from "express-async-handler";
import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

router
  .get("/", asyncHandler(userController.list))
  .get("/:name", asyncHandler(userController.get))
  .post("/", asyncHandler(userController.create))
  .put("/:name", asyncHandler(userController.update))
  .delete("/:name", asyncHandler(userController.deleteAll));

module.exports = router;
