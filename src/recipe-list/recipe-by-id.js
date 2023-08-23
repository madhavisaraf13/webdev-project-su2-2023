import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {AiOutlineClose, AiOutlineHeart, AiOutlineComment, AiOutlineRetweet} from "react-icons/ai";
import * as service from "./service";
import RecipeItem from "./recipe-item";
import { findRecipeByIdThunk } from "../services/recipe-thunks";
import styles from "./index.css";

const RecipeById = () => {
 const { id } = useParams();
 console.log(id);
 const [likes, setLikes] = useState([]);
 const { recipes, loading } = useSelector(state => state.recipes)
 const dispatch = useDispatch();
 const fetchLikes = async () => {
    console.log("in fetch likes");
    const likes = await service.getLikesForRecipe(id);
    setLikes(likes);
  };
 useEffect(() => {
   dispatch(findRecipeByIdThunk(id));
   fetchLikes();
 }, [])
 
 return(
  <ul className="list-group">
  {
    recipes.map(recipe =>
    <div key={recipe.id} recipe={recipe}>
    <div>
        <div class="wd-bookmark-arrow">
            <div class="wd-float-left">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="wd-bookmarks-title wd-margin-left">{recipe.title}</div>  
            <div class="wd-bookmarks-handle wd-margin-left">Recipe ID: {id}</div>
        </div>
    </div>
    <div>
        <div class="wd-bookmarks-post-right">
            <div class="wd-bookmarks-post-author">
             <span class="wd-fg-color-light-gray">{recipe.cuisines}</span>
            </div>
            <ul class="wd-bookmarks-post-author">
            </ul>
            <div class="wd-bookmarks-post-main-content">
            <span class="wd-fg-color-light-gray">Reference: </span>
            <a href={recipe.sourceUrl} target="_blank" >{recipe.sourceUrl}</a>
            </div>
            <div class="wd-bookmarks-post-image-and-content">
                <img src={recipe.image} alt="Post Image"/>
                <div class="wd-bookmarks-post-image-title-content">
                    <b>Ready in Minutes: {recipe.readyInMinutes}</b>
                    <div class="wd-fg-color-light-gray">
                        {recipe.instructions}
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><a href="javascript:void(0)"><AiOutlineHeart className="text-danger" style={{fontSize: '20px'}}  onClick={() => {
            service.userLikesRecipe(recipe.id, {
              name: recipe.name,
              recipeId: recipe.id,
            });
          }}/></a><span>2</span></div>
                <div><a href="javascript:void(0)"><AiOutlineComment className="" href="" style={{fontSize: '20px'}}  /></a><span>1</span></div>
            </div>
        </div>
        <div class="wd-post-float-right">
            <i class="fa fa-ellipsis-h"></i>
        </div> 
        <div class="wd-float-done"></div>
    </div>
    </div>
    )}
  </ul>
 );
};
export default RecipeById;