const { Recipe } = require('../models');

async function getAllRecipes() {
  return Recipe.find().exec();
}

async function getRecipe(recipeId) {
  return Recipe.findOne({ _id: recipeId }).exec();
}

async function addRecipe(recipeBody) {
  // TODO: Perform recipe validation
  return new Recipe(recipeBody).save()
    .then((newRecipe) => newRecipe['_id']);
}

async function deleteRecipe(recipeId) {
  return Recipe.deleteOne({ _id: recipeId }).exec();
}

module.exports = {
  getAllRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
};
