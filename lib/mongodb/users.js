import prisma from "../../prisma/prisma";

export const getAllUsers = async () => {
  const users = await prisma.User.findMany({});
  return users;
};

export const getUser = async (id) => {
  const user = await prisma.User.findUnique({
    where: {
      id,
    },
  });
  return user;
};

export const registerUser = async ({ email, name, birthYear }) => {
  const user = await prisma.User.create({
    data: { email, name, birthYear },
  });
  return user;
};
