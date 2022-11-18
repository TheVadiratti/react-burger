import useFindIngredient from "./useFindIngredient";
import { TOrder } from "../types";

export default function useSumCost() {
  const findIngredient = useFindIngredient();
  return function sumCost(order: TOrder) {
    let sum: number = 0;
    order.ingredients.forEach((ingredientID: string) => {
      const currentIngredient: any = findIngredient(ingredientID);
      sum += currentIngredient.price;
    })
    return sum;
  }
}
