import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class RecipeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      const recipesUI = this.props.recipes.map((item, key) => (
        <a href={item.recipe.url}>
          <div className="col-6 mt-5 float-left">
            <p className="h3">{item.recipe.label}</p>
            <img src= {item.recipe.image}/>
          </div>
        </a>
      ));

    return (
        <div>
            {recipesUI}
        </div>
    );
  }
}

export default RecipeComponent;
