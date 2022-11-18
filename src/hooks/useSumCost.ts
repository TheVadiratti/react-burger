import useFindIngredient from "./useFindIngredient";

type Torder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

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
