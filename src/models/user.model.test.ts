import mongoose from "mongoose";
import User, { IUser } from "./user.model";

describe("User model", () => {
  beforeAll(async () => {
    const MONGODB_TEST_URL = "mongodb://localhost:27017/test_db";
    await mongoose.connect(MONGODB_TEST_URL, {
      useNewUrlParser: true,
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it.only("Should save a user", async () => {
    const user: IUser = new User({
      name: "Test name",
      about: "Test about",
    });

    const spy = jest.spyOn(user, "save");
    user.save();

    expect(spy).toHaveBeenCalled();

    expect(user).toMatchObject({
      name: expect.any(String),
      about: expect.any(String),
    });

    expect(user.name).toBe("Test name");
  });

  it.skip("Should throw validation errors", () => {
    const user = new User();

    expect(user.validate).toThrow();
  });
});
