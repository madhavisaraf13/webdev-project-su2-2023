import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const RECIPE_API = "http://localhost:4000/api/recipes";

export const userLikesRecipe = async (recipeId, recipe) => {
  console.log("user - likes recipe");
  console.log(recipe);
  console.log(recipeId);
  const response = await request.post(`${RECIPE_API}/${recipeId}/likes`, recipe);
  if (response.status==401) {
    return 'Unauthorized';
  }
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
  if (response.status==401) {
    return 'Unauthorized';
  }
  return response.data;
};


export const getLatestLiked = async () => {
  const response = await request.get(
    `http://localhost:4000/api/recipes/latest-recipes`
  );
  console.log(response.data);
  return response.data;
};