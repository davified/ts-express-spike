import User from "../models/user.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  const data = await newUser.save();
  res.send(data);
};


export default {
  create,
};
