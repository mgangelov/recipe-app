import React from 'react';
import { connect } from 'react-redux';

import { deleteRecipe } from '../actions/recipeActions';
import MenuButton from './MenuButton';

function Recipe(props) {
  const {
    id,
    title,
    description,
    ingredients,
    deleteRecipeFromDB
  } = props;

  return (
    <div>
      <h1>Recipe: {title}</h1>
      <p>Description: {description}</p>
      <ul>
        {ingredients && ingredients.map((ingredient) => (
          <li key={ingredient.title}>{ingredient.title}: {ingredient.amount} {ingredient.amountType}</li>
        ))}
      </ul>
      <MenuButton
        kind='deleteRecipe'
        onClick={() => deleteRecipeFromDB(id)}
      >Delete recipe</MenuButton>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    deleteRecipeFromDB: (recipeId) => dispatch(deleteRecipe(recipeId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Recipe);
