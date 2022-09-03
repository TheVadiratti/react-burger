import { GET_INGREDIENTS, baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

const getData = (data) => {
  return {
    type: GET_INGREDIENTS,
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


export { GET_INGREDIENTS, setIngredientsList };