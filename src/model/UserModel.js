import { PrismaClient } from "@prisma/client";

const UserModel = new PrismaClient().users;

export default UserModel;
