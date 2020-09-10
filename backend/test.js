const mongoose = require('mongoose');

const mongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect('mongodb+srv://default:default@recipeappdb.fqovb.mongodb.net/cookbook?retryWrites=true&w=majority', mongoClientOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db');
});

const ingredientSchema = new mongoose.Schema({
  title: String,
  amount: String,
  amountType: String
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [ingredientSchema]
});


const Recipe = mongoose.model('Recipe', recipeSchema);

const chocolateIngredient = new Ingredient({
  title: 'chocolate',
  amount: '2',
  amountType: 'blocks'
});

const nutellaIngredient = new Ingredient({
  title: 'nutella',
  amount: '2',
  amountType: 'spoons'
});

const diabetesRecipe = new Recipe({
  title: 'Diabetes',
  description: 'How to get diabetes',
  ingredients: [
    chocolateIngredient,
    nutellaIngredient
  ]
});

async function testAsync() {
  const recipes = await Recipe.find().exec();
  console.log(recipes);
}

testAsync();

// Recipe.find((err, recipes) => {
//   if (err) {
//     console.error(err);
//   }

//   console.log(recipes);
// })

// diabetesRecipe.save((err, diabetesRecipe) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('recipe imported');
// })