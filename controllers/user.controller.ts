import User, { IUser } from "../models/user.model";

interface ICreateUserInput {
  name: IUser["name"];
}

const createUser = async ({ name }: ICreateUserInput): Promise<IUser> => {
  const data: IUser = await User.create({
    name,
  });
  return data;
}

export default {
  createUser,
};
