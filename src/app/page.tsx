'use client'
import Image from 'next/image';
import Home from './home';
import Career from './career';
import Major from './major';
import Header from './header';
import React from 'react';
import Pertanyaan from './pertanyaan';

export default async function App() {
  return (
    <main>
      <Header />
      <Home />
      <Career />
      <Major />
      <Pertanyaan />
    </main>
  );
}
