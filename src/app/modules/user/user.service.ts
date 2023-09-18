import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();

  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserById = async (payload: string): Promise<IUser | null> => {
  // ekhane name: 1 mane name ta just return korbe and 1 mane true
  const user = await User.findOne({ id: payload }, { name: 1, gender: 1 });
  return user;
};
