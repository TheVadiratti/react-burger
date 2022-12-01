import { useRef } from 'react';
import burgerItem from './BurgerItem.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { deleteIngredientAction, updateCounterAction, sortIngredientsAction } from '../../services/actions/ingredients';
import { useDrag, useDrop } from "react-dnd";
import { TIngredient } from '../../types';

type TProps = {
  ingredient: TIngredient;
  type?: 'top' | 'bottom';
  isLocked: boolean;
  isMain: boolean;
  text: string;
  id?: number;
};

function BurgerItem({ ingredient, type, isLocked, isMain, text, id }: TProps) {
  const constructorStructure = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();
  const commonRef = useRef<HTMLDivElement>(null);
  const nullRef = useRef<HTMLDivElement>(null);

  const [, dragRef] = useDrag({
    type: "burgerItem",
    // id из пропсов компонента
    item: { id: id }
  });

  const [, dropTarget] = useDrop({
    accept: "burgerItem",
    hover: (item: {id: number}, monitor) => {
      if (!commonRef.current) {
        return;
      }
      // атрибут id есть только у компонентов бургера, которые можно перетащить
      if (id || id === 0) {
        const dragIndex = item.id;
        const hoverIndex = id;
        const hoverBoundingRect = commonRef.current?.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        dispatch(sortIngredientsAction(dragIndex, hoverIndex));
        item.id = hoverIndex;
      }
    }
  })

  const dragDropRef: any = dragRef(dropTarget(commonRef));

  function deleteIngredient() {
    // !! УИ - удаляемый ингредиент !!
    // поиск id УИ по индексу в сторе
    const currentIngredientId = constructorStructure.main[id!]._id;
    dispatch(deleteIngredientAction(currentIngredientId, id!));
    dispatch(updateCounterAction(currentIngredientId));
  }

  return (
    <div ref={isMain ? dragDropRef : nullRef} className={isMain ? burgerItem.item : burgerItem.itemLocked} id={String(id)}>
      {isMain && <DragIcon type='primary' />}
      <ConstructorElement
        type={isMain ? undefined : type}
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