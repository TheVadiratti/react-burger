import { useRef } from 'react';
import ordersListStyles from './OrdersList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getTimeString } from '../../utils/utils';
import useSumCost from '../../hooks/useSumCost';
import { openOrderInfoAction } from '../../services/actions/modal';
import OrderIngredients from '../OrderIngredients/OrderIngredients';

function OrdersList() {
  const orders = useSelector((state) => state.orders);
  const windowCntRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const sumCost = useSumCost();

  function openOrder(e) {
    const id = e.currentTarget.getAttribute('id');
    dispatch(openOrderInfoAction(true));
    history.replace({ pathname: `/feed/${id}` });
  }

  function renderOrderCard() {
    return orders.list.map((order, i) => {
      return (
        <div onClick={openOrder} className={`p-6 ${ordersListStyles.item}`} key={i} id={order._id}>
          <div className={ordersListStyles.info}>
            <span className="text text_type_digits-default">{'#' + order.number}</span>
            <span className="text text_type_main-default text_color_inactive">{getTimeString(order.createdAt)}</span>
          </div>
          <h4 className={`text text_type_main-medium ${ordersListStyles.heading}`}>{order.name}</h4>
          <div className={ordersListStyles.componentsCnt}>
            <div className={ordersListStyles.components}>
              <OrderIngredients ingredientsArr={order.ingredients} />
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