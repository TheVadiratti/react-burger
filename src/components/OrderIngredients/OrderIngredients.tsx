import orderIngredientsStyles from './OrderIngredients.module.css';
import useFindIngredient from '../../hooks/useFindIngredient';

type TProps = {
  ingredientsArr: string[];
};

function OrderIngredients({ ingredientsArr }: TProps) {
  console.log(ingredientsArr);
  const findIngredient = useFindIngredient();
  return ingredientsArr.map((ingredientID, i) => {
    if (i < 5) {
      const currentIngredient = findIngredient(ingredientID);
      if (currentIngredient) {
        return (
          <div className={orderIngredientsStyles.fakeBorder} style={{ zIndex: `${ingredientsArr.length - i}` }} key={i}>
            <div className={orderIngredientsStyles.img} style={{ backgroundImage: `url(${currentIngredient.image})` }} key={i}></div>
          </div>
        )
      }
    }
    else if (i === 5) {
      const currentIngredient = findIngredient(ingredientID);
      if (currentIngredient) {
        const remains = String(ingredientsArr.length - 5);
        return (
          <div className={orderIngredientsStyles.fakeBorder} style={{ zIndex: `${ingredientsArr.length - i}` }} key={i}>
            <div className={orderIngredientsStyles.img} style={{ backgroundImage: `url(${currentIngredient.image})` }} key={i}>
              <div className={orderIngredientsStyles.imgOverlay}>
                <span className='text text_type_main-default'>{'+' + remains}</span>
              </div>
            </div>
          </div>
        )
      }
    }
  })
}

export default OrderIngredients;