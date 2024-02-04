import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getPertanyaan = async (): Promise<Pertanyaan[]> => {
  const pertanyaan = await prisma.pertanyaan.findMany();
  console.log(pertanyaan);

  return pertanyaan;
};

interface Pertanyaan {
  id: number;
  pertanyaan: string;
  jawaban?: string;
}
