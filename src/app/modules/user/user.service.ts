import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "4",
    role: "student",
    password: "meem",
    name: {
      firstName: "Sazzadul",
      middleName: "Alam",
      lastName: "Rumi",
    },
    dateOfBirth: "16",
    gender: "female",
    email: "meemrumi59@gmail.com",
    contact: "019999999",
  });
  await user.save();

  console.log(user);
};
