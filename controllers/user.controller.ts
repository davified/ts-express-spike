import User, { IUser } from '../models/User';

interface ICreateUserInput {
    name: IUser['name'];
}

async function createUser({
    name,
}: ICreateUserInput): Promise<IUser> {
    return User.create({
        name,
    })
        .then((data: IUser) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

export default {
    createUser
};