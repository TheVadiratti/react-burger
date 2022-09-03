import { GET_INGREDIENTS, baseUrl } from '../../utils/constants';

const getData = (data) => {
  return {
    type: GET_INGREDIENTS,
    data: data
  }
}

function setIngredientsList() {
  return function(dispatch) {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        dispatch(getData(res.data))
      })
      .catch(error => {
        console.log(error);
      })
    }
}


export { GET_INGREDIENTS, setIngredientsList };