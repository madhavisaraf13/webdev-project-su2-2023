import { createSlice } from "@reduxjs/toolkit";

import { findRecipesThunk, findRecipeByIdThunk } from "../services/recipe-thunks";

const initialState = {
   recipes: [],
   loading: false
}


const recipesSlice = createSlice({
 name: 'recipes',
 initialState,
 extraReducers: {
   [findRecipesThunk.pending]:
      (state) => {
         state.loading = true
         state.recipes = [] },
   [findRecipesThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.recipes = payload },
   [findRecipesThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   [findRecipeByIdThunk.pending]:
      (state) => {
         state.loading = true
         state.recipes = [] },
   [findRecipeByIdThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.recipes = payload },
   [findRecipeByIdThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
 },
 reducers: {}
 
});

export default recipesSlice.reducer;