import { useRef } from 'react';
import ordersListStyles from './OrdersList.module.css';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getTimeString } from '../../utils/utils';

function OrdersList() {
  const ingredients = useSelector((state) => state.ingredients.data);
  const orders = useSelector((state) => state.orders);
  const windowCntRef = useRef(null);

  console.log(ingredients);

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
              <span className="text text_type_digits-default">480</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )
    })
  }

  function renderOrderComponents(ingredientsArr) {
    return ingredientsArr.map((ingredientID, i) => {
      const currentIngredient = ingredients.find(item => {
        return item._id === ingredientID;
      })
      return (
        <div className={ordersListStyles.fakeBorder} style={{zIndex: `${ingredientsArr.length - i}`}}>
          <div className={ordersListStyles.cardImg} style={{ backgroundImage: `url(${currentIngredient.image})` }} key={i}></div>
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