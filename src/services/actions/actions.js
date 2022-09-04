import { GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS, CLOSE_MODAL, baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

function getDataAction(data) {
  return {
    type: GET_INGREDIENTS,
    data: data
  }
}

function setIngredientsListAction() {
  return function(dispatch) {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        dispatch(getDataAction(res.data))
      })
      .catch(error => {
        console.log(error);
      })
    }
}

function openIngredientDetailsAction(data) {
  return {
    type: OPEN_INGREDIENT_DETAILS,
    dataIngredientDetails: data
  }
}

function closeModalAction() {
  return {
    type: CLOSE_MODAL,
  }
}

export { setIngredientsListAction, openIngredientDetailsAction, closeModalAction };