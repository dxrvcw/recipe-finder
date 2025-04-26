import Link from 'next/link';
import RecipeCard from '../RecipeCard';
import RECIPES_API from '@/api/recipes';
import qs from 'query-string';

interface RecipesListProps {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
  page?: string;
}

const RecipesList = async ({ query, cuisine, maxReadyTime, page }: RecipesListProps) => {
  const currentPage = Number(page) || 1;
  const pageSize = 12;

  const { results, totalResults } = await RECIPES_API.getRecipes(
    {
      query,
      cuisine,
      maxReadyTime,
      offset: (currentPage - 1) * pageSize,
      number: pageSize,
    },
    { revalidate: 60 }
  );

  const totalPages = Math.ceil(totalResults / pageSize);

  const buildLink = (newPage: number) => {
    const params = qs.stringify(
      {
        query,
        cuisine,
        maxReadyTime,
        page: newPage.toString(),
      },
      { skipEmptyString: true, skipNull: true }
    );

    return `?${params}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.length ? (
          results.map(({ id, image, title }) => (
            <RecipeCard id={id} title={title} image={image} key={id} />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        {currentPage > 1 && (
          <Link
            href={buildLink(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous Page
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={buildLink(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next Page
          </Link>
        )}
      </div>
    </>
  );
};

export default RecipesList;
