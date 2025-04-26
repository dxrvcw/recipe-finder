'use client';

import Button from '@/components/base/Button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Something went wrong ;( </h1>
      <p className="text-gray-600 mb-8">{error.message || 'Please try again later.'}</p>
      <div>
        <Button onClick={() => reset()} text="Try Again" />
      </div>
    </div>
  );
}
