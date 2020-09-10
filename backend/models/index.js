const { model } = require('mongoose');
const recipeSchema = require('./schema/recipeSchema');

module.exports = {
  Recipe: model('Recipe', recipeSchema),
};
