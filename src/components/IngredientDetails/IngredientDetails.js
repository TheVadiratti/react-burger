import ingredientDetails from './IngredientDetails.module.css';

function IngredientDetails() {
  return (
    <>
      <img className={ingredientDetails.image} src='https://code.s3.yandex.net/react/code/meat-01.png' alt='[uq'></img>
      <span className="mt-4 text text_type_main-medium">Биокотлета из марсианской Магнолии</span>
      <div className={`mt-8 pb-15 ${ingredientDetails.infoCnt}`}>
        <div className={ingredientDetails.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>244,4</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>12,2</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>17,2</span>
        </div>
        <div className={`${ingredientDetails.infoItem}`}>
          <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
          <span className='mt-2 text text_type_digits-default text_color_inactive'>10,2</span>
        </div>
      </div>
    </>
  )
}

export default IngredientDetails;