import orderIngredientsStyles from './OrderIngredients.module.css';
import useFindIngredient from '../../hooks/useFindIngredient';
import PropTypes from 'prop-types';

function OrderIngredients({ ingredientsArr }) {
  const findIngredient = useFindIngredient();
  return ingredientsArr.map((ingredientID, i) => {
    if (i < 5) {
      const currentIngredient = findIngredient(ingredientID);
      return (
        <div className={orderIngredientsStyles.fakeBorder} style={{ zIndex: `${ingredientsArr.length - i}` }} key={i}>
          <div className={orderIngredientsStyles.img} style={{ backgroundImage: `url(${currentIngredient.image})` }} key={i}></div>
        </div>
      )
    }
    else if (i === 5) {
      const currentIngredient = findIngredient(ingredientID);
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
  })
}

export default OrderIngredients;

OrderIngredients.propTypes = {
  ingredientsArr: PropTypes.array.isRequired
}; 