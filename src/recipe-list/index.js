import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import RecipeItem from "./recipe-item";
import { findRecipesThunk } from "../services/recipe-thunks";

const RecipeList = () => {
 const { recipes, loading } = useSelector(state => state.recipes)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findRecipesThunk())
 }, [])
 console.log(typeof(recipes));
 console.log(recipes);
 return(
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
 );
};
export default RecipeList;