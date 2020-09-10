const { Schema, Types } = require('mongoose');

const ingredientSchema = require('./ingredientSchema');

module.exports = new Schema({
  id: Types.ObjectId,
  title: String,
  description: String,
  ingredients: [ingredientSchema],
});
