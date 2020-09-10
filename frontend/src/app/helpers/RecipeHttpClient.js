import fetch from 'node-fetch';

async function processRequest(request) {
  try {
    const response = await request;
    const responseStatus = await response.status;
    if (responseStatus !== 200) {
      throw new Error(`Something bad went with the request. Status code ${responseStatus}`);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

async function getAllRecipes(apiUrl) {
  return await processRequest(fetch(`${apiUrl}/recipes`));
}

async function addRecipe(apiUrl, recipeContents) {
  return await processRequest(fetch(`${apiUrl}/recipes`, {
    method: 'post',
    body: JSON.stringify(recipeContents),
    headers: { 'Content-Type': 'application/json' }
  }));
}

async function deleteRecipe(apiUrl, recipeId) {
  console.log('executing delete with ', recipeId);
  return await processRequest(fetch(`${apiUrl}/recipes/${recipeId}`, {
    method: 'delete'
  }));
}

export default {
  addRecipe,
  deleteRecipe,
  getAllRecipes
}