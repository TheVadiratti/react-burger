import ingredientStyles from './Ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";

function Ingredient({ image, name, price, _id, type }) {
  const constructorStructure = useSelector((state) => state.constructor);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {id: _id}
  });

  function counterRender() {
    if(constructorStructure.buns._id === _id) {
      return (<Counter count={2} size="default" />)
    }
    else if(constructorStructure.counter[_id]) {
      return (<Counter count={constructorStructure.counter[_id]} size="default" />)
    }
    else {
      return;
    }
  }

  return (
    <div ref={dragRef} className={ingredientStyles.cnt}>
      <img className="mb-2" src={image} alt={name}></img>
      <div className={`${ingredientStyles.priceCnt} mb-2`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default" ref={dragRef}>{name}</h3>
      {counterRender()}
    </div>
  )
}

export default Ingredient;