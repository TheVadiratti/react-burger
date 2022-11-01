import { useSelector } from 'react-redux';

export default function useFindIngredient() {
  const ingredientsState = useSelector((state) => state.ingredients.data);

  return function findIngredient(id) {
    return ingredientsState.find(ingredient => {
      return id === ingredient._id;
    });
  }
}