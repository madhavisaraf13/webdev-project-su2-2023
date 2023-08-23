import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {AiOutlineClose, AiOutlineHeart, AiOutlineComment, AiOutlineRetweet} from "react-icons/ai";
import * as service from "./likes-service";
import RecipeItem from "./recipe-item";
import { findRecipeByIdThunk } from "../services/recipe-thunks";
import styles from "./index.css";
import axios from 'axios';
import {toast} from 'react-toastify';


const SERVER_API_URL = 'http://localhost:4000';

const RecipeById = () => {
 const { id } = useParams();
 console.log(id);
 const [likes, setLikes] = useState([]);
 const { recipes, loading } = useSelector(state => state.recipes)
 const dispatch = useDispatch();

 const [user, setUser] = useState(null);

 const fetchUser = async () => {
    try {
      const response = await axios.get(`${SERVER_API_URL}/current-user`, { withCredentials: true });
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user.');
    }
  };

 const fetchLikes = async () => {
    console.log("in fetch likes");
    const likes = await service.getLikesForRecipe(id);
    setLikes(likes);
  };
 useEffect(() => {
   dispatch(findRecipeByIdThunk(id));
   fetchUser();
   //fetchLikes();
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
                {user && <div><a href="javascript:void(0)"><AiOutlineHeart className="text-danger" style={{fontSize: '20px'}}  onClick={() => {
            service.userLikesRecipe(recipe.id, {
              name: recipe.name,
              recipeId: recipe.id,
            });
            alert('Recipe added in Likes');
          }}/></a></div>}
            </div>
        </div>
        <div class="wd-float-done"></div>
    </div>
    </div>
    )}
  </ul>
 );
};
export default RecipeById;