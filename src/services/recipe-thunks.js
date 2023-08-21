import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./recipe-service";

export const findRecipesThunk = createAsyncThunk(
 "recipes/findRecipes",
 async () => await service.findRecipes()
);

export const findRecipesQueryThunk = createAsyncThunk(
 "recipes/findRecipes",
 async (item) => await service.findRecipesQuery(item)
);

export const findRecipeByIdThunk = createAsyncThunk(
 "recipes/findRecipeById",
 async (item) => await service.findRecipeById(item)
);