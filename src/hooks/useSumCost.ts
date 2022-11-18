import useFindIngredient from "./useFindIngredient";
import { Torder } from "../types";

export default function useSumCost() {
  const findIngredient = useFindIngredient();
  return function sumCost(order: Torder) {
    let sum: number = 0;
    order.ingredients.forEach((ingredientID: string) => {
      const currentIngredient: any = findIngredient(ingredientID);
      sum += currentIngredient.price;
    })
    return sum;
  }
}
