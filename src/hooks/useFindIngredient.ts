import { useSelector } from "./hooks";
import { Tingredient } from "../types";

export default function useFindIngredient() {
  const ingredientsState = useSelector((state) => state.ingredients.data);

  return function findIngredient(id: string) {
    return ingredientsState.find((ingredient: Tingredient) => {
      return id === ingredient._id;
    });
  }
}