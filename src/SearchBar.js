import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
//import * as service from "./service";
import RecipeItem from "./recipe-list/recipe-item";
import { findRecipesQuery } from "./services/recipe-service";
import { findRecipesQueryThunk } from "./services/recipe-thunks";

function SearchBar() {

  const { searchTerm } = useParams();
  const navigate = useNavigate();
  //const [recipes, setReceipes] = useState([]);
  const [query, setQuery] = useState("");
  const { recipes, loading } = useSelector(state => state.recipes)

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

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(findRecipesQueryThunk(qwe))
  }, []);
  console.log(typeof(recipes));
 console.log(recipes);

    return (
    <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <form className="d-flex">
              <input
                className="form-control w-75 m-3"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="What do you want to cook today...?"
                aria-label="Go"
              />
              <button onClick={(e) => {
                e.preventDefault();
                  dispatch(findRecipesQueryThunk(query));
                
                }} 
                className="btn btn-outline-light m-3" data-mdb-ripple-color="dark" type="submit">
                Search
              </button>
            </form>
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
          </div>
        </div>
      </div>
    );
}

export default SearchBar;