import {
  ADD_RECIPE,
  DELETE_RECIPE,
  GET_ALL_RECIPES
} from '../constants';


const initialState = {
  allRecipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        allRecipes: [...state.allRecipes, action.payload]
      }
    case DELETE_RECIPE:
      return {
        ...state,
        allRecipes: state.allRecipes.filter(
          ({_id}) => (_id !== action.payload.recipeId)
        )
      }
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload.allRecipes
      }
    default:
      return state
  }
}