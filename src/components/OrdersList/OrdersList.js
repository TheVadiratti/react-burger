import { useRef } from 'react';
import ordersListStyles from './OrdersList.module.css';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getTimeString } from '../../utils/utils';

function OrdersList() {
  const ingredientsState = useSelector((state) => state.ingredients.data);
  const orders = useSelector((state) => state.orders);
  const windowCntRef = useRef(null);

  function findIngredient(id) {
    return ingredientsState.find(ingredient => {
      return id === ingredient._id;
    })
  }

  function sumCost(order) {
    let sum = 0;
    order.ingredients.forEach(ingredientID => {
      const currentIngredient = findIngredient(ingredientID);
      if (currentIngredient.type === 'bun') {
        sum += currentIngredient.price * 2;
      }
      else {
        sum += currentIngredient.price;
      }
    })
    return sum;
  }

  function renderOrderComponents(ingredientsArr) {
    return ingredientsArr.map((ingredientID, i) => {
      const currentIngredient = ingredientsState.find(item => {
        return item._id === ingredientID;
      })
      return (
        <div className={ordersListStyles.fakeBorder} style={{ zIndex: `${ingredientsArr.length - i}` }} key={i}>
          <div className={ordersListStyles.cardImg} style={{ backgroundImage: `url(${currentIngredient.image})` }} key={i}></div>
        </div>
      )
    })
  }

  function renderOrderCard() {
    return orders.list.map((order, i) => {
      return (
        <div className={`p-6 ${ordersListStyles.item}`} key={i}>
          <div className={ordersListStyles.info}>
            <span className="text text_type_digits-default">{'#' + order.number}</span>
            <span className="text text_type_main-default text_color_inactive">{getTimeString(order.createdAt)}</span>
          </div>
          <h4 className="text text_type_main-medium">{order.name}</h4>
          <div className={ordersListStyles.componentsCnt}>
            <div className={ordersListStyles.components}>
              {renderOrderComponents(order.ingredients)}
            </div>
            <div className={ordersListStyles.sum}>
              <span className="text text_type_digits-default">{sumCost(order)}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section ref={windowCntRef} className={`${ordersListStyles.window}`}>
      {renderOrderCard()}
    </section>
  )
}

export default OrdersList;