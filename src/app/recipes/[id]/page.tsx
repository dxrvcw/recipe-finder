import { BackButton } from '@/components/features/BackButton';
import { Suspense } from 'react';
import { Loader } from '@/components/base/Loader';
import RecipeDetails from '@/components/features/RecipeDetails';
import RECIPES_API from '@/api/recipes';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  const recipe = await RECIPES_API.getRecipeById(Number(id));

  const pageTitle = recipe?.title || 'Recipe Details';
  const pageDescription = `Learn how to cook ${recipe?.title || 'this recipe'}. Ready in ${
    recipe?.readyInMinutes || 0
  } minutes and serves ${recipe?.servings || 0} people.`;

  return {
    title: pageTitle,
    description: pageDescription,
  };
}

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div className="container mx-auto p-4">
      <BackButton />

      <Suspense fallback={<Loader />}>
        <RecipeDetails id={Number(id)} />
      </Suspense>
    </div>
  );
};

export default RecipePage;
