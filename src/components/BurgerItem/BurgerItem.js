import React from 'react';
import burgerItem from './BurgerItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredientAction, updateCounter } from '../../services/actions/actions';
import { useDrag, useDrop } from "react-dnd";

function BurgerItem({ ingredient, type, isLocked, isMain, text, id }) {
  const constructorStructure = useSelector((state) => state.constructor);
  const dispatch = useDispatch();
  const commonRef = React.useRef(null);
  const nullRef = React.useRef(null);

  const [, dragRef] = useDrag({
    type: "burgerItem",
    item: { id: id },
    collect: monitor => ({
      canDrag: monitor.canDrag(),
      isDrag: monitor.isDragging()
    })
  });

  const [, dropTarget] = useDrop({
    accept: "burgerItem",
    drop(item) {
      dispatch({
        type: 'SORT_INGREDIENTS',
        from: item.id,
        to: id
      })
    },
    hover: (item, monitor) => {
      const dragIndex = item.id
      const hoverIndex = id
      const hoverBoundingRect = commonRef.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
      dispatch({
        type: 'SORT_INGREDIENTS',
        from: item.id,
        to: id
      })
      item.id = hoverIndex
    },
  })

  const dragDropRef = dragRef(dropTarget(commonRef))

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