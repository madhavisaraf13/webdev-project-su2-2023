import { useNavigate } from "react-router-dom";
import {findRecipes} from "./service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as service from "./service";
import RecipeItem from "./recipe-item";

function SearchBar() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [recipes, setReceipes] = useState([]);
  const [query, setQuery] = useState("");
  
  

  const search = async (searchTerm) => {
    console.log("SearchTerm");
    const qwe = searchTerm || query;
    console.log("qwe");
    console.log(qwe);
    console.log("SearchTerm");
    console.log(searchTerm);
    const response = await service.findRecipes(qwe);
    console.log(response);
    setReceipes(response);
  };



  
  useEffect(() => {
    if (searchTerm) {
      setQuery(searchTerm);
      console.log("after setQuery");
      console.log(query);
      search(query);
    } else {
      search(query);
    }
    console.log("I am here");
    console.log(query);
  }, [searchTerm]);
 

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
              <button onClick={() => {
                search(searchTerm);
                navigate(`/home/${query}`);}} className="btn btn-outline-light m-3" data-mdb-ripple-color="dark" type="submit">
                Search
              </button>
            </form>
            <h3>Albums</h3>
      <div className="table-responsive">
          <ul>
          {
       recipes.map(recipe =>
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
