import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./service";

export const findRecipesThunk = createAsyncThunk(
 "tuits/findRecipes",
 async (itemname) => await service.findRecipes(itemname)
);