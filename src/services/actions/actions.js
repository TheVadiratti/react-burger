import { GET_INGREDIENTS, OPEN_INGREDIENT_DETAILS, baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

function getData(data) {
  return {
    type: GET_INGREDIENTS,
    data: data
  }
}

function handleIngredientDetails(type, data) {
  return {
    type: type,
    data: data
  }
}

function setIngredientsList() {
  return function(dispatch) {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        dispatch(getData(res.data))
      })
      .catch(error => {
        console.log(error);
      })
    }
}

export { setIngredientsList, handleIngredientDetails };