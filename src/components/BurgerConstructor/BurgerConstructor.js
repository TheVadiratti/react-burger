import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';
import { openOrderDetailsAction } from '../../services/actions/actions';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';

function BurgerConstructor() {
  const ingredientsData = useSelector((state) => state.ingredients);
  const [state, setState] = React.useState(null);
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop() {
      console.log('score!');
    }
  });

  React.useEffect(() => {
    const loadData = new Promise(function (resolve) {
      if (ingredientsData.length !== 0) {
        resolve();
      }
    });

    loadData.then(() => {
      const bun = ingredientsData.find(item => {
        if (item.type === 'bun') {
          return item;
        }
      })
      const main = ingredientsData.filter(item => {
        return item.type !== 'bun';
      })
      setState({ bun: bun, main: main });
    })
  }, [ingredientsData]);

  function createIngredient(ingredient, type, isLocked, isMain, text, key) {
    return (
      <div className={isMain ? burgerConstructorStyles.item : burgerConstructorStyles.itemLocked} key={key}>
        {isMain && <DragIcon type='primary' />}
        <ConstructorElement
          type={isMain ? '' : type}
          isLocked={isLocked}
          text={`${ingredient.name} ${text}`}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      </div>
    )
  }

  function sum() {
    const bunSum = state.bun.price * 2;
    const mainPriceArray = state.main.map(item => {
      return item.price;
    });
    const mainSum = mainPriceArray.reduce((prev, current) => {
      return prev + current;
    }, mainPriceArray[0]);
    return mainSum + bunSum;
  }

  function sendOrder() {
    const orderList = Object.assign([], state.main);
    orderList.unshift(state.bun);
    orderList.push(state.bun);
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
    state && (<section className={burgerConstructorStyles.section}>
      <div ref={dropTarget} className={burgerConstructorStyles.ingredients}>

        {createIngredient(state.bun, 'top', true, false, '(верх)', 1)}

        <div className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>

          {state.main.map(item => {
            return createIngredient(item, null, false, true, '', item._id);
          })}

        </div>

        {createIngredient(state.bun, 'bottom', true, false, '(низ)', 2)}

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
    </section>)
  )
}

export default BurgerConstructor;