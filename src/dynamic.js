import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import * as service from "./recipe-list/likes-service";
import RecipeItem from "./recipe-list/recipe-item";
import { findRecipesQuery } from "./services/recipe-service";
import { findRecipesQueryThunk } from "./services/recipe-thunks";
import { findRecipeById } from "./services/recipe-service";
import './index.css';

function DynamicList() {

  /*const { searchTerm } = useParams();
  const navigate = useNavigate();
  //const [recipes, setReceipes] = useState([]);
  const [query, setQuery] = useState("");
  const { recipes, loading } = useSelector(state => state.recipes)
  */
  const [recipes, setRecipes] = useState([]);
  var recipeIds = [];
  var idString = "";

  const fetchLatestLiked = async () => {
    console.log("In fetch latest liked");
    const recipesObject = await service.getLatestLiked();
    recipeIds = [];
    recipesObject.map(recipe =>{
        recipeIds.push(recipe.recipeId);
    })
    console.log(recipeIds);
    //setRecipes(recipes);
    idString = recipeIds.join(',');
    console.log(idString);
    //setRecipes(idString);
    const recipesList = await findRecipeById(idString);
    setRecipes(recipesList);
  };
  /*const search = async (searchTerm) => {
    console.log("SearchTerm");
    const qwe = searchTerm || query;
    console.log("qwe");
    console.log(qwe);
    console.log("SearchTerm");
    console.log(searchTerm);
    //const response = await service.findRecipes(qwe);
    const response = await findRecipesQuery(qwe);
    console.log(response);
    setReceipes(response);
  };*/

  //const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(findRecipesQueryThunk(qwe))
    fetchLatestLiked();
  }, []);
  //console.log(typeof(recipes));
  //console.log(recipes);

    return (
    <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-9">
            {/*
            {recipes?.length > 0 &&  <h3>Albums</h3>}
              <div className="table-responsive">
              <ul>
              { loading &&
                <li className="list-group-item">
                Loading...
                </li>
              }
              {
                recipes?.map(recipe =>
                <RecipeItem
                  key={recipe.id} recipe={recipe}/> )
              }
              </ul>
            </div>
            */
            <h1 className="wd-color" >#Trending Recipes</h1>
            }
            {/*
                recipes.map(recipe =>
                    <RecipeItem
                        key={recipe.id} recipe={recipe}/> )
            */}
            <div className="table-responsive">

<table className="table">

  <tbody>

    <tr>

      {recipes.map((recipe) => {

        return (

          <td>
            <RecipeItem
                        key={recipe.id} recipe={recipe}/> 


          </td>

        );

      })}

    </tr>

  </tbody>

</table>

</div>
          </div>
        </div>
      </div>
    );
}

export default DynamicList;