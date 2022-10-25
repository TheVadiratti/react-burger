import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import profileHistoryStyles from './Orders.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import useSumCost from '../../hooks/useSumCost';
import { wsMyOrdersActions } from '../../utils/constants';
import { getTimeString } from '../../utils/utils';
import OrderIngredients from '../../components/OrderIngredients/OrderIngredients';

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.my.list);
  const sumCost = useSumCost();

  console.log(orders);

  useEffect(() => {
    dispatch({
      type: wsMyOrdersActions.start
    });
    return () => {
      dispatch({
        type: wsMyOrdersActions.closed
      })
    }
  }, []);

  function renderOrders() {
    return orders.map((order, i) => {
      return (
        <li className={`p-6 ${profileHistoryStyles.order}`} key={i}>
          <div className={profileHistoryStyles.idCnt}>
            <span className="text text_type_digits-default">{'#' + order.number}</span>
            <span className="text text_type_main-default text_color_inactive">{getTimeString(order.createdAt)}</span>
          </div>
          <h3 className="text text_type_main-medium mt-6 mb-2">{order.name}</h3>
          <span className="text text_type_main-default">Создан</span>
          <div className={`mt-6 ${profileHistoryStyles.cnt}`}>
            <div className={profileHistoryStyles.components}>
              <OrderIngredients ingredientsArr={order.ingredients} />
            </div>
            <div className={profileHistoryStyles.priceCnt}>
              <span className="text text_type_digits-default">{sumCost(order)}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </li>
      )
    })
  }

  return (
    <ul className={profileHistoryStyles.orders}>
      {renderOrders()}
    </ul>
  )
}

export default Orders;