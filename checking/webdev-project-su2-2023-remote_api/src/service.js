import axios from 'axios';
//const RECIPE_API = `${process.env.SPOONACULAR_SERVER_API_URL}/recipes`;
const RECIPE_API = 'https://api.spoonacular.com/recipes';

export const findRecipes = async (itemname) => {
 console.log(RECIPE_API);
 console.log("receipe");
 console.log(RECIPE_API+'/complexSearch?apiKey=2ecaf6fb3fad4f668615d6c6623b3e9b&query='+itemname);
 const response = await axios.get(RECIPE_API+'/complexSearch?apiKey=2ecaf6fb3fad4f668615d6c6623b3e9b&query='+itemname);
 console.log(response)
 const recipes = response.data;
 return recipes.results;
}




