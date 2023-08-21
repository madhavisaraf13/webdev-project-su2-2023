import React from "react";
import {Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';

import RecipeById from "./recipe-by-id";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-8">
     <Link to={`/recipe/details/${recipe.id}`}>
     <Card style={{ width: '18rem' }} >
        <CardImg variant="top" src={recipe.image} />
        <CardBody>
        <CardTitle>{recipe.title}</CardTitle>
        <CardText>Add Something in breif about recipe</CardText>
        </CardBody>
    </Card>
    </Link>
     </div>
     <br/>
   </div>
  </li>
 );
};

export default RecipeItem;