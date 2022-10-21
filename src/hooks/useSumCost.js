import useFindIngredient from "./useFindIngredient";

export default function useSumCost() {
  const findIngredient = useFindIngredient();
  return function sumCost(order) {
    let sum = 0;
    order.ingredients.forEach(ingredientID => {
      const currentIngredient = findIngredient(ingredientID);
      sum += currentIngredient.price;
    })
    return sum;
  }
}

