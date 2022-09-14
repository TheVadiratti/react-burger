import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerItem from '../BurgerItem/BurgerItem';
import { baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';
import { openOrderDetailsAction, addIngredient, updateCounter } from '../../services/actions/actions';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';

function BurgerConstructor() {
  const ingredientsData = useSelector((state) => state.ingredients);
  const constructorStructure = useSelector((state) => state.constructor);
  const dispatch = useDispatch();
  console.log(constructorStructure.main);

  const windowCntRef = React.useRef(null);

  React.useEffect(() => {
    // плавная прокрутка к последнему добавленному ингредиенту
    windowCntRef.current.scrollBy({
      top: windowCntRef.current.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }, [constructorStructure.main.length])

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      // поиск ингредиента в сторе
      const currentIngredient = ingredientsData.find(ingredient => {
        return ingredient._id === item.id
      });
      dispatch(addIngredient(currentIngredient));
      if (currentIngredient.type !== 'bun') {
        dispatch(updateCounter(item.id));
      }
      dispatch({
        type: 'DRAG_OFF'
      });
    }
  });

  function sum() {
    const bunSum = constructorStructure.buns.price * 2 || 0;
    const mainPriceArray = constructorStructure.main.map(item => {
      return item.price;
    });
    const mainSum = mainPriceArray.reduce((prev, current) => {
      return prev + current;
    }, 0) || 0;
    return mainSum + bunSum;
  }

  function sendOrder() {
    const orderList = Object.assign([], constructorStructure.main);
    orderList.unshift(constructorStructure.buns);
    orderList.push(constructorStructure.buns);
    fetch(`${baseUrl}/api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": orderList
      })
    })
      .then(checkResponse)
      .then(res => {
        dispatch(openOrderDetailsAction(res));
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <section className={burgerConstructorStyles.section}>
      <div ref={dropTarget} className={burgerConstructorStyles.ingredients}>

        {constructorStructure.buns.name ?
        <BurgerItem ingredient={constructorStructure.buns} type={'top'} isLocked={true} isMain={false} text={'(верх)'} keyValue={0} />
        :
        <p className={`${burgerConstructorStyles.instruction} text text_type_digits-default`}>Добавьте булки</p>}

        <div ref={windowCntRef} className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>

          {constructorStructure.main.length !== 0 ?
            constructorStructure.main.map((item, i) => {
              return (<BurgerItem ingredient={item} type={null} isLocked={false} isMain={true} text={''} id={i} key={i} />)
            })
            :
            <p className={`${burgerConstructorStyles.instruction} text text_type_digits-default`}>Добавьте ингредиенты</p>
          }

        </div>

        {constructorStructure.buns.name &&
        <BurgerItem ingredient={constructorStructure.buns} type={'bottom'} isLocked={true} isMain={false} text={'(низ)'} keyValue={1} />
        }

      </div>
      <div className={`${burgerConstructorStyles.total} mt-10 pr-4`}>
        <Button type="primary" size="large" onClick={sendOrder}>
          Оформить заказ
        </Button>
        <div className={`${burgerConstructorStyles.sum} mr-10`}>
          <p className={`${burgerConstructorStyles.digit} text text_type_digits-medium mr-2`}>{`${sum()}`}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor;