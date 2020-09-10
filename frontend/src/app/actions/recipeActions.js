import {
  ADD_RECIPE,
  DELETE_RECIPE,
  GET_ALL_RECIPES,
  API_URL
} from '../constants';

import RecipeHttpClient from '../helpers/RecipeHttpClient';


export function addRecipe(recipeContents) {
  return function(dispatch) {
    // TODO: Perform some validation on recipeContents
    RecipeHttpClient.addRecipe(API_URL, recipeContents)
      .then(({ recipeId }) => dispatch(
        {
          type: ADD_RECIPE,
          payload: {
            _id: recipeId,
            ...recipeContents
          }
        }
      ))
  };
};

export function deleteRecipe(recipeId) {
  return function(dispatch) {
    RecipeHttpClient.deleteRecipe(API_URL, recipeId)
      .then(() => dispatch({
        type: DELETE_RECIPE,
        payload: {
          recipeId
        }
      }
      ))
  }
};

export function getAllRecipes() {
  return function(dispatch) {
    RecipeHttpClient.getAllRecipes(API_URL)
      .then(allRecipes => dispatch(
        {
          type: GET_ALL_RECIPES,
          payload: { allRecipes }
        }
      ))
  };
};