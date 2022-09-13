import burgerItem from './BurgerItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredientAction, updateCounter } from '../../services/actions/actions';

function BurgerItem({ingredient, type, isLocked, isMain, text, id}) {
  const constructorStructure = useSelector((state) => state.constructor);
  const dispatch = useDispatch();

  function deleteIngredient(e) {
    // !! УИ - удаляемый ингредиент !!
    // получение индекса УИ из атрибута элемента, преобразование к числу
    const currentIngredientIndex = parseInt(e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('id'));
    // поиск id УИ по индексу в сторе
    const currentIngredientId = constructorStructure.main[currentIngredientIndex]._id;
    dispatch(deleteIngredientAction(currentIngredientId, currentIngredientIndex));
    dispatch(updateCounter(currentIngredientId));
  }

  return (
    <div className={isMain ? burgerItem.item : burgerItem.itemLocked} id={id}>
      {isMain && <DragIcon type='primary' />}
      <ConstructorElement
        type={isMain ? '' : type}
        isLocked={isLocked}
        text={`${ingredient.name} ${text}`}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={deleteIngredient}
      />
    </div>
  )
}

export default BurgerItem;