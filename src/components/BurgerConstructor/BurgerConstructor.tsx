import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerItem from '../BurgerItem/BurgerItem';
import { sendOrderAction, addIngredientAction, updateCounterAction } from '../../services/actions/ingredients';
import { openOrderDetailsAction } from '../../services/actions/modal';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import useFindIngredient from '../../hooks/useFindIngredient';
import { SET_INITIAL_BUNS } from '../../utils/constants';
import { TIngredient } from '../../types';
import { TDnDConstructorCntTarget } from '../../types';

function BurgerConstructor() {
  const ingredientsData = useSelector((state) => state.ingredients.data);
  const constructorStructure = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();
  const history = useHistory();
  const hasToken = localStorage.getItem('refreshToken');
  const isDataSuccess = useSelector((state) => state.ingredients.isSuccess);
  const findIngredient = useFindIngredient();

  const windowCntRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // плавная прокрутка к последнему добавленному ингредиенту
    windowCntRef.current?.scrollBy({
      top: windowCntRef.current.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
    if (isDataSuccess) {
      if (!constructorStructure.buns) {
        dispatch({
          type: SET_INITIAL_BUNS,
          buns: getInitBuns()
        });
      }
    }
  }, [constructorStructure.main.length])

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: TDnDConstructorCntTarget) {
      // поиск ингредиента в сторе
      const currentIngredient = findIngredient(item.id);
      if (currentIngredient) {
        dispatch(addIngredientAction(currentIngredient));
        if (currentIngredient.type !== 'bun') {
          dispatch(updateCounterAction(item.id));
        }
      }
    }
  });

  function getInitBuns() {
    return ingredientsData.find(ingredient => {
      return ingredient.type === 'bun';
    })
  }

  function sum() {
    const bunSum = constructorStructure.buns!.price! * 2 || 0;
    const mainPriceArray = constructorStructure.main.map(item => {
      return item.price;
    });
    const mainSum = mainPriceArray.reduce((prev, current) => {
      return prev + current;
    }, 0) || 0;
    return mainSum + bunSum;
  }

  function sendOrder() {
    if (hasToken) {
      const orderList: TIngredient[] = Object.assign([], constructorStructure.main);
      orderList.unshift(constructorStructure.buns!);
      orderList.push(constructorStructure.buns!);
      dispatch(sendOrderAction(orderList));
      history.push({ pathname: '/order' });
    }
    else {
      history.push({ pathname: '/login' });
    }
  }

  return (constructorStructure.buns ? (
      <section className={burgerConstructorStyles.section}>
        <div ref={dropTarget} className={burgerConstructorStyles.ingredients}>

          <BurgerItem ingredient={constructorStructure.buns} type={'top'} isLocked={true} isMain={false} text={'(верх)'} key={0} />

          <div ref={windowCntRef} className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>

            {constructorStructure.main.length !== 0 ?
              constructorStructure.main.map((item, i) => {
                return (<BurgerItem ingredient={item} isLocked={false} isMain={true} text={''} id={i} key={item.uuid} />)
              })
              :
              <p className={`${burgerConstructorStyles.instruction} text text_type_main-medium`}>Добавьте ингредиенты</p>
            }

          </div>

          {constructorStructure.buns!.name &&
            <BurgerItem ingredient={constructorStructure.buns} type={'bottom'} isLocked={true} isMain={false} text={'(низ)'} key={1} />
          }

        </div>
        <div className={`${burgerConstructorStyles.total} mt-10 pr-4`}>
          <Button type="primary" size="large" onClick={sendOrder} htmlType='submit'>
            Оформить заказ
          </Button>
          <div className={`${burgerConstructorStyles.sum} mr-10`}>
            <p className={`${burgerConstructorStyles.digit} text text_type_digits-medium mr-2`}>{`${sum()}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </section>
    ) : null
  )
}

export default BurgerConstructor;