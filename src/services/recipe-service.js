import axios from 'axios';
//const RECIPE_API = `${process.env.SPOONACULAR_SERVER_API_URL}/recipes`;
const RECIPE_API = 'https://api.spoonacular.com/recipes';
const API_KEY = 'fda3b0a141304ff3be8e7fb35497e33d';

export const findRecipes = async () => {
 console.log(RECIPE_API);
 const response = await axios.get(RECIPE_API+'/complexSearch?apiKey=2ecaf6fb3fad4f668615d6c6623b3e9b&query=burger&diet=vegetarian');
 const recipes = response.data;
 return recipes.results;
}

export const findRecipesQuery = async (itemName) => {
 console.log(RECIPE_API);
 const response = await axios.get(RECIPE_API+'/complexSearch?apiKey=' + API_KEY + '&query=' + itemName);
 const recipes = response.data;
 return recipes.results;
}

export const findRecipeById = async (itemId) => {
 console.log(RECIPE_API);
 const response = await axios.get(RECIPE_API+'/informationBulk?apiKey=' + API_KEY + '&ids=' + itemId);
 console.log(response);
 const recipe = response.data;
 console.log(recipe[0]);
 return recipe;
}