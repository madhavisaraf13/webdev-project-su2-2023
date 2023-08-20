import React from "react";
import {Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';

const RecipeItem = ({
   recipe = {
    "id": 642539,
    "title": "Falafel Burger",
    "image": "https://spoonacular.com/recipeImages/642539-312x231.png",
    "imageType": "png"
    }
 }) => {
  
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-8">
     <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src={recipe.image} />
        <CardBody>
        <CardTitle>{recipe.title}</CardTitle>
        //todo : Add styling
        </CardBody>
    </Card>
     </div>
     <br/>
   </div>
  </li>
 );
};

export default RecipeItem;