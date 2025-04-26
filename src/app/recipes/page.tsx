import RecipesList from '@/components/features/RecipesList';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { Loader } from '@/components/base/Loader';

import { BackButton } from '@/components/features/BackButton';

interface SearchParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
  page?: string;
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }) {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const pageTitle = `Recipes - ${query || 'All'} ${cuisine ? `(${cuisine})` : ''}`;

  return {
    title: pageTitle,
    description: `Find delicious recipes based on your search criteria. Query: ${query}, Cuisine: ${cuisine}, Max Ready Time: ${maxReadyTime} minutes.`,
  };
}

const RecipesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { query, cuisine, maxReadyTime, page } = await searchParams;

  if (!query && !cuisine && !maxReadyTime) {
    redirect('/');
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />

      <h1 className="text-3xl font-bold mb-4">Found Recipes</h1>

      <div className="space-y-2 mb-8">
        {query && (
          <p>
            <b>Your search:</b> {query}
          </p>
        )}
        {cuisine && (
          <p>
            <b>Selected cuisine:</b> {cuisine}
          </p>
        )}
        {maxReadyTime && (
          <p>
            <b>Max Time:</b> {maxReadyTime} minutes
          </p>
        )}
      </div>

      <Suspense fallback={<Loader />}>
        <RecipesList query={query} cuisine={cuisine} maxReadyTime={maxReadyTime} page={page} />
      </Suspense>
    </div>
  );
};

export default RecipesPage;
