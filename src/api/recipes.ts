import { GetRecipesParams, RecipeInformationResponse, RecipesResponse } from '@/types/recipes';
import { apiFetch, FetchOptions } from './api';

const RECIPES_API = {
  getRecipes: async (params: GetRecipesParams, options?: FetchOptions) =>
    await apiFetch<RecipesResponse, GetRecipesParams>(`/recipes/complexSearch`, params, options),

  getRecipeById: async (id: number, options?: FetchOptions) =>
    await apiFetch<RecipeInformationResponse, object>(`/recipes/${id}/information`, {}, options),
};

export default RECIPES_API;
