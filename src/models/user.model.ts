import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document{
  name: string;
  about: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  about: { type: String, required: false },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
