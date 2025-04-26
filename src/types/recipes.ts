export interface GetRecipesParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
  offset?: number;
  number?: number;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface RecipesResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

// Add more properties as needed
export interface RecipeInformationResponse {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  instructions: string;
}
