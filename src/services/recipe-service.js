import axios from 'axios';
//const RECIPE_API = `${process.env.SPOONACULAR_SERVER_API_URL}/recipes`;
const RECIPE_API = 'https://api.spoonacular.com/recipes';
const API_KEY = '1d91fc28cb0b487bb76e15686bf6f058';

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