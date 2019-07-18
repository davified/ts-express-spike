import User from "../models/user.model";
import { Request, Response } from "express";

const list = async (req: Request, res: Response) => {
  const data = await User.find();
  res.json(data);
};

const get = async (req: Request, res: Response) => {
  const data = await User.findOne({ name: req.params.name });
  res.json(data);
};

const create = async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  const data = await newUser.save();
  res.send(data);
};

const update = async (req: Request, res: Response) => {
  const data = await User.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    {
      new: true,
    }
  );
  res.send(data);
};

const deleteAll = async (req: Request, res: Response) => {
  const data = await User.deleteMany({ name: req.params.name });
  res.send(data);
};

export default {
  list,
  get,
  create,
  update,
  deleteAll,
};
