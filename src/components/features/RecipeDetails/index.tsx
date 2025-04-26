import RECIPES_API from '@/api/recipes';
import Button from '@/components/base/Button';
import Image from 'next/image';

interface RecipeDetailsProps {
  id: number;
}

const RecipeDetails = async ({ id }: RecipeDetailsProps) => {
  const recipe = await RECIPES_API.getRecipeById(Number(id));

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {recipe.image && (
          <div className="w-full md:w-1/2">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          <div className="space-y-2 text-gray-700 mb-6">
            <p>
              <b>Ready in:</b> {recipe.readyInMinutes} minutes
            </p>
            <p>
              <b>Servings:</b> {recipe.servings}
            </p>
            <p>
              <b>Vegetarian:</b> {recipe.vegetarian ? 'Yes' : 'No'}
            </p>
            <p>
              <b>Vegan:</b> {recipe.vegan ? 'Yes' : 'No'}
            </p>
            <p>
              <b>Gluten Free:</b> {recipe.glutenFree ? 'Yes' : 'No'}
            </p>
            <p>
              <b>Dairy Free:</b> {recipe.dairyFree ? 'Yes' : 'No'}
            </p>
            <p>
              <b>Very Healthy:</b> {recipe.veryHealthy ? 'Yes' : 'No'}
            </p>
            <p>
              <b>Cheap:</b> {recipe.cheap ? 'Yes' : 'No'}
            </p>
          </div>

          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button text="View Original Recipe" />
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {recipe.instructions || 'No instructions provided.'}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
