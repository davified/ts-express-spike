import IUser from "../models/user";
import User from "../models/user.model";

interface ICreateUser {
  name: IUser["name"];
}

const createUser = async ({ name }: ICreateUser): Promise<IUser> => {
  const data: IUser = await User.create({
    name,
  });
  return data;
};

export default {
  createUser,
};
