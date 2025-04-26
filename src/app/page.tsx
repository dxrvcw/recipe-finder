import { RecipesSearchForm } from '@/components/features/RecipesSearchForm';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 h-screen">
      <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>

      <RecipesSearchForm />
    </div>
  );
};

export default Home;
