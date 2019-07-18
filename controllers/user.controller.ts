import User, { IUser } from "../models/user.model";

interface ICreateUserInput {
  name: IUser["name"];
}

async function createUser({ name }: ICreateUserInput): Promise<IUser> {
  const data: IUser = await User.create({
    name,
  });

  return data;
}

export default {
  createUser,
};
