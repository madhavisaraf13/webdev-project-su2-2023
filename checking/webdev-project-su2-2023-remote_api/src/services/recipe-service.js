import axios from 'axios';
//const RECIPE_API = `${process.env.SPOONACULAR_SERVER_API_URL}/recipes`;
const RECIPE_API = 'https://api.spoonacular.com/recipes';

export const findRecipes = async (itemname) => {
 console.log(RECIPE_API);
 console.log(RECIPE_API+'/complexSearch?apiKey=aa0354a676eb49758d0dd4064fbe2b4d&query='+itemname);
 const response = await axios.get(RECIPE_API+'/complexSearch?apiKey=aa0354a676eb49758d0dd4064fbe2b4d&query='+itemname);
 const recipes = response.data;
 return recipes.results;
}