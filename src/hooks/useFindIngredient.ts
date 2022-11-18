import { useSelector } from "./hooks";

type Tingredient = {
  type?: string;
  calories?: number;
  carbohydrates?: number;
  fat?: number;
  proteins?: number;
  image?: string;
  image_large?: string;
  image_mobile?: string;
  name?: string;
  price?: number;
  __v?: number;
  _id?: string;
};

export default function useFindIngredient() {
  const ingredientsState = useSelector((state) => state.ingredients.data);

  return function findIngredient(id: string) {
    return ingredientsState.find((ingredient: Tingredient) => {
      return id === ingredient._id;
    });
  }
}