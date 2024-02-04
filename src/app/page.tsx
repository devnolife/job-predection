'use client'
import Image from 'next/image';
import Home from './home';
import Major from './major';
import Header from './header';
import { PrismaClient } from '@prisma/client';
import React, { useState } from 'react';
import Pertanyaan from './pertanyaan';

export default async function App() {
  return (
    <main>
      <Header />
      <Home />
      <Major />
      <Pertanyaan />
    </main>
  );
}
