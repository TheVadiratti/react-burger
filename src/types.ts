export type TIngredient = {
  type: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  proteins: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  __v: number;
  _id: string;
};

export type TIngredientNotRequired = Partial<TIngredient>;

export type TOrder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}