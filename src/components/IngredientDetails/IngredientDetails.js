import ingredientDetails from './IngredientDetails.module.css';
import { ingredientType } from '../utils/types';

function IngredientDetails(props) {
  return (
    <>
      <img className={ingredientDetails.image} src={props.data.image} alt='[uq'></img>
      <span className="mt-4 text text_type_main-medium">{props.data.name}</span>
      <div className={`mt-8 pb-15 ${ingredientDetails.infoCnt}`}>
        <div className={ingredientDetails.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{props.data.calories}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{props.data.proteins}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{props.data.fat}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{props.data.carbohydrates}</span>
        </div>
      </div>
    </>
  )
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  data: ingredientType.isRequired
}; 