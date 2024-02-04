'use client'
import Image from 'next/image';
import Home from './home';
import Major from './major';
import Header from './header';
import { PrismaClient } from '@prisma/client';
import React, { useState } from 'react';

export default async function App() {
  const prisma = new PrismaClient();
  const pertanyaan = await prisma.pertanyaan.findMany();
  return (
    <main>
      <Header />
      <Home />
      <Major />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">You might be wondering...</h2>
        </div>
        <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          <div className="py-8 first:pt-0 last:pb-0">
            {pertanyaan.map((item) => (
              <div key={item.id} className="flex items-center gap-x-5">
                <div className="flex flex-col">
                  <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.pertanyaan}
                  </h3>
                  <div className="mx-auto flex justify-center gap-x-2">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Iya
                    </button>
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Tidak
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
