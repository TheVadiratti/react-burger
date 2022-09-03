import { baseUrl } from '../../utils/constants'; 
const GET_INGREDIENTS = 'GET_INGREDIENTS';

const getData = (data) => {
  return {
    type: GET_INGREDIENTS,
    data: data
  }
}

const setIngredientsList = () => {
  // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function(dispatch) {
    // Запрашиваем данные у сервера
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