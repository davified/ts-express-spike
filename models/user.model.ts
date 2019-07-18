import IUser from "./user";
import mongoose, { Document, Schema } from "mongoose";

type UserType = IUser & Document;

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  about: { type: String, required: false },
});

const User = mongoose.model<UserType>("User", UserSchema);

export default User;
