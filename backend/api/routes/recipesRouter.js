const express = require('express');

const router = express.Router();

const { recipeController } = require('../../controllers');

router.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await recipeController.getAllRecipes();
    res.status(200).json(allRecipes);
  } catch (err) {
    res.status(500).json({ message: `Error while getting all recipes: ${err}` });
  }
});

router.get('/recipes/:recipeId', async (req, res) => {
  try {
    const requestedRecipe = await recipeController
      .getRecipe(req.params.recipeId);
    res.status(200).json(requestedRecipe);
  } catch (err) {
    res.status(500).json({ message: `Error while uploading recipe: ${err}` });
  }
});

router.post('/recipes', async (req, res) => {
  try {
    const newRecipeId = await recipeController.addRecipe(req.body);
    res.status(200).json({
      message: 'Recipe uploaded.',
      recipeId: newRecipeId,
    });
  } catch (err) {
    res.status(500).json({ message: `Error while uploading recipe: ${err}` });
  }
});

router.delete('/recipes/:recipeId', async (req, res) => {
  try {
    await recipeController.deleteRecipe(req.params.recipeId);
    res.status(200).json({ message: 'Recipe deleted.' });
  } catch (err) {
    res.status(500).json({ message: `Error while deleting recipe: ${err}` });
  }
});

router.put('/recipes/:recipeId', async (req, res) => {
  // update the recipe with recipeId here
});

module.exports = router;
