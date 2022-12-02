import useFindIngredient from "./useFindIngredient";
import { TIngredient, TOrder } from "../types";

export default function useSumCost() {
  const findIngredient = useFindIngredient();
  return function sumCost(order: TOrder) {
    let sum: number = 0;
    order.ingredients.forEach((ingredientID: string) => {
      const currentIngredient: TIngredient | undefined = findIngredient(ingredientID);
      if (currentIngredient) {
        sum += currentIngredient.price;
      }
    })
    return sum;
  }
}
