import ingredientDetails from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails() {
  const currentIngredient = useSelector((state) => state.modal.dataIngredientDetails);

  return (
    <>
      <img className={ingredientDetails.image} src={currentIngredient.image} alt={currentIngredient.name}></img>
      <span className="mt-4 text text_type_main-medium">{currentIngredient.name}</span>
      <div className={`mt-8 pb-15 ${ingredientDetails.infoCnt}`}>
        <div className={ingredientDetails.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{currentIngredient.calories}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{currentIngredient.proteins}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{currentIngredient.fat}</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>{currentIngredient.carbohydrates}</span>
        </div>
      </div>
    </>
  )
}

export default IngredientDetails;