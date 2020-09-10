import styled from '@emotion/styled';

const MenuButton = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${props => props.kind === 'deleteRecipe' ?
    'white' :
    'rgb(112, 76, 182)'
  };
  padding-bottom: 4px;
  cursor: pointer;
  background-color: ${props => {
    switch (props.kind) {
      case 'cookbook':
        return 'lightgreen';
      case 'addRecipe':
        return 'lightblue';
      case 'deleteRecipe':
        return 'red';
      default:
        return 'beige';
    }
  }};
  border-radius: 2px;
  transition: all 0.15s;
`;

export default MenuButton;