import React from 'react';

import Recipe from './Recipe';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions/recipeActions';

class Cookbook extends React.Component {
  componentDidMount() {
    this.props.loadRecipesFromDB();
  }

  render() {
    const {
      allRecipes,
    } = this.props;
    return (
      <>
        {allRecipes && allRecipes.length ? allRecipes.map(
          ({ _id, title, description, ingredients }) => (
            <Recipe
              key={_id}
              id={_id}
              title={title}
              description={description}
              ingredients={ingredients}
            />
          )
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allRecipes: state.recipeReducer.allRecipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecipesFromDB: () => dispatch(getAllRecipes())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cookbook);

