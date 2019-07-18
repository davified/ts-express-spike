import IUser from "../models/user";
import User from "../models/user.model";

interface ICreateUser {
  name: IUser["name"];
  about: IUser["about"];
}

const createUser = async ({ name, about="" }: ICreateUser): Promise<IUser> => {
  const data: IUser = await User.create({
    name,
    about,
  });
  return data;
};

export default {
  createUser,
};
