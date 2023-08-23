import axios from 'axios';
//const RECIPE_API = `${process.env.SPOONACULAR_SERVER_API_URL}/recipes`;
const RECIPE_API = 'https://api.spoonacular.com/recipes';
const API_KEY = 'c9ef1c69b2b144e7990c054b44bfdbcf';
export const findRecipes = async () => {
 console.log(RECIPE_API);
 const response = await axios.get(RECIPE_API+'/complexSearch?apiKey=c9ef1c69b2b144e7990c054b44bfdbcf&query=burger&diet=vegetarian');
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
