import { useDispatch, useSelector } from 'react-redux';
import profileHistoryStyles from './Orders.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import useSumCost from '../../hooks/useSumCost';
import { getTimeString } from '../../utils/utils';
import OrderIngredients from '../../components/OrderIngredients/OrderIngredients';
import { openOrderInfoAction } from '../../services/actions/modal';
import { MAKE_MODAL_MY_ORDER } from '../../utils/constants';
import OrderStatus from '../../components/OrderStatus/OrderStatus';

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.my.list);
  const history = useHistory();
  const sumCost = useSumCost();

  function openOrder(e) {
    const id = e.currentTarget.getAttribute('id');
    dispatch(openOrderInfoAction());
    dispatch({
      type: MAKE_MODAL_MY_ORDER
    });
    history.replace({ pathname: `/profile/orders/${id}` });
  }

  function renderOrders() {
    return orders.map((order, i) => {
      return (
        <li onClick={openOrder} className={`p-6 ${profileHistoryStyles.order}`} key={i} id={order._id}>
          <div className={profileHistoryStyles.idCnt}>
            <span className="text text_type_digits-default">{'#' + order.number}</span>
            <span className="text text_type_main-default text_color_inactive">{getTimeString(order.createdAt)}</span>
          </div>
          <h3 className="text text_type_main-medium mt-6 mb-2">{order.name}</h3>
          <OrderStatus order={order} />
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