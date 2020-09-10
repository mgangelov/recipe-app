import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MenuButton from './MenuButton';

import Cookbook from './Cookbook';
import NewRecipeSubmission from './NewRecipeSubmission';

export default function PageRouter() {
  return (
    <Router>
    <div>
      <MenuButton kind='cookbook'>
        <Link to="/">Cookbook</Link>
      </MenuButton>
      <MenuButton kind='addRecipe'>
        <Link to="/addRecipe">Add recipe</Link>
      </MenuButton>

      <Switch>
        <Route path="/addRecipe">
          <NewRecipeSubmission/>
        </Route>
        <Route path="/">
          <Cookbook />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}