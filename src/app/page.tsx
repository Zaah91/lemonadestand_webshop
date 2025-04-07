'use client';

import Image from 'next/image';

export default function HomePage() {

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to the Lemonade Stand!</h1>
        <p className="text-lg mt-2">Fresh and delicious lemonade for every taste.</p>
        <Image className="mx-auto block w-1/4" src="/duck.webp" alt="duck" width={200} height={200} />
      </header>
    </div>
  );
}