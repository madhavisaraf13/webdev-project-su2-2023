import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./recipe-service";

export const findRecipesThunk = createAsyncThunk(
 "tuits/findRecipes",
 async () => await service.findRecipes()
);