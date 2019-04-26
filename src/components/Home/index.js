import React from 'react';
import ReactDOM from 'react-dom';

import { withAuthorization } from '../Session';

import RecipeComponent from '../Recipe/recipeComponent';

var recipes;
var ingredients = [];

var ingredientsList;


const HomePage = () => (
  <div>
    <div className="container">
      <h1>What can I cook?</h1>
      <p>Please add all the ingredients that you have near</p>
      <input type="text" className="form-control col-4" id="textIngredient"/>
      <button className="btn btn-primary col-4 mt-3" onClick={addIngredient}>Add ingredient</button>
    </div>
    <div className="container">
      <div id="ingredients">
        {ingredientsList}
      </div>
      <button className="btn btn-primary col-4 mt-3" onClick={getRecipesData}>Search</button>
    </div>
    <div id="recipesContainer"></div>
  </div>
);

function getRecipesData() {
  let ingredientsString = '';

  for (let i = 0; i < ingredients.length; i++) {
    ingredientsString += ingredients[i] + '+';
  }

  fetch(`https://api.edamam.com/search?q=${ingredientsString}water&app_id=3cb47b69&app_key=6c0a27ca31b9eeddbbbe1428e4b92d6a`)
  .then((response) => {
      return response.json()
  })
  .then((resp) => {
    recipes =  resp.hits;
    ReactDOM.render(<RecipeComponent recipes={recipes}/>, document.getElementById('recipesContainer'));
  });

}

function addIngredient(){
  ingredients.push(document.getElementById(`textIngredient`).value);
  document.getElementById("ingredients").innerHTML = '';
  document.getElementById('textIngredient').value = '';
  ingredients.forEach(element => {
    document.getElementById("ingredients").innerHTML += element;
  });

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
