import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled'

import { addRecipe } from '../actions/recipeActions';


export function NewRecipeSubmission(props) {
  const {
    pushRecipeToDb
  } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
    <h1>Add new recipe</h1>
    {/* <form onSubmit={pushRecipeToDb()}> */}
    <form onSubmit={() => pushRecipeToDb({
      title,
      description,
      ingredients: temporaryIngredients
    })}>
      <SubmissionFormGrid>
      <label>
        Title:
        <InputField
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description: 
        <InputField
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      </SubmissionFormGrid>
      <input type="submit" value="Submit" />
      <p>Setting ingredients coming soon!</p>
    </form>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    pushRecipeToDb: (recipeContents) => dispatch(addRecipe(recipeContents))
  };
}

const temporaryIngredients = [
    {
      title: 'Chocolate',
      amount: 1,
      amountType: 'bar'
    },
    {
      title: 'Milk',
      amount: 250,
      amountType: 'ml'
    },
    {
      title: 'Cucumber',
      amount: 1,
      amountType: 'kg'
    }
];

const InputField = styled.input`
  margin: 1%;
  margin-left: 0.5%;
  margin-right: 2%;
`;

const SubmissionFormGrid = styled.div`
  border: 1px solid #dfdfdf;
  margin: 1%
`

export default connect(
  null,
  mapDispatchToProps
)(NewRecipeSubmission);
