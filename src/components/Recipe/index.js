import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      recipes: [],
    };
  }



  render() {
    const { recipes, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

const RecipeList = ({ recipes }) => (
  <ul>
    {recipes}
  </ul>
);

export default withFirebase(RecipePage);
