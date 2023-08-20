import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import RecipeItem from "./recipe-item";
import { findRecipesThunk } from "../services/recipe-thunks";

const RecipeList = (itemName) => {
 const { recipes, loading } = useSelector(state => state.recipes)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findRecipesThunk(itemName))
 }, [])
 return(
  <div>
  <h3>Search Results</h3>
   <ul className="list-group">
     { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {
       recipes.map(recipe =>
         <RecipeItem
           key={recipe.id} recipe={recipe}/> )
     }
   </ul>
   </div>
 );
};
export default RecipeList;