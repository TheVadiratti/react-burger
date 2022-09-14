import React from 'react';
import burgerItem from './BurgerItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredientAction, updateCounterAction, sortIngredientsAction } from '../../services/actions/actions';
import { useDrag, useDrop } from "react-dnd";

function BurgerItem({ ingredient, type, isLocked, isMain, text, id }) {
  const constructorStructure = useSelector((state) => state.constructor);
  const dispatch = useDispatch();
  const commonRef = React.useRef(null);
  const nullRef = React.useRef(null);

  const [, dragRef] = useDrag({
    type: "burgerItem",
    // id из пропсов компонента
    item: { id: id }
  });

  const [, dropTarget] = useDrop({
    accept: "burgerItem",
    hover: (item, monitor) => {
      if (!commonRef.current) {
        return;
      }
      const dragIndex = item.id;
      const hoverIndex = id;
      const hoverBoundingRect = commonRef.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(sortIngredientsAction(item.id, id));
      item.id = hoverIndex;
    }
  })

  const dragDropRef = dragRef(dropTarget(commonRef))

  function deleteIngredient(e) {
    // !! УИ - удаляемый ингредиент !!
    // получение индекса УИ из атрибута элемента, преобразование к числу
    const currentIngredientIndex = parseInt(e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('id'));
    // поиск id УИ по индексу в сторе
    const currentIngredientId = constructorStructure.main[currentIngredientIndex]._id;
    dispatch(deleteIngredientAction(currentIngredientId, currentIngredientIndex));
    dispatch(updateCounterAction(currentIngredientId));
  }

  return (
    <div ref={isMain ? dragDropRef : nullRef} className={isMain ? burgerItem.item : burgerItem.itemLocked} id={id}>
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