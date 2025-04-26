'use client';

import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-sm font-bold mb-8 hover:underline cursor-pointer"
    >
      {'<-'} Go Back
    </button>
  );
};
