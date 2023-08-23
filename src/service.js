import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const RECIPE_API = "http://localhost:4000/api/recipes";

export const userLikesRecipe = async (recipeId, recipe) => {
  const response = await request.post(`${RECIPE_API}/${recipeId}/likes`, recipe);
  return response.data;
};

export const getLikesForUser = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/likes`
  );
  return response.data;
};

export const getLikesForRecipe = async (recipeId) => {
  const response = await request.get(
    `http://localhost:4000/api/recipes/${recipeId}/likes`
  );
  return response.data;
};