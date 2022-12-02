import { useSelector } from "./hooks";
import { TIngredient } from "../types";

export default function useFindIngredient() {
  const ingredientsState = useSelector((state) => state.ingredients.data);

  return function findIngredient(id: string) {
    return ingredientsState.find((ingredient: TIngredient) => {
      return id === ingredient._id;
    });
  }
}