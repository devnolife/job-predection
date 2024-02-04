const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.prospek_kerja.findMany();
  console.log(allUsers);
}

main()
