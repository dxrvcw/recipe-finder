import Button from '@/components/base/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-600">Sorry, but the page you are looking for does not exist.</p>
      <Link href="/" className="mt-4">
        <Button text="Go Home" />
      </Link>
    </div>
  );
}
