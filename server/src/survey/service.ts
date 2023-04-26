import { PrismaClient, User } from "../../user-client";

const prisma = new PrismaClient();

export async function createUser(data: User): Promise<boolean> {
  try {
    await prisma.user.create({ data });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
