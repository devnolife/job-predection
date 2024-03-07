
import React from "react";
import { PrismaClient } from '@prisma/client';

export default async function Pertanyaan() {
  const prisma = new PrismaClient();
  const pertanyaan = await prisma.pertanyaan.findMany();
  return (
    <div>
      <h1>okok</h1>
    </div>
  );
}

