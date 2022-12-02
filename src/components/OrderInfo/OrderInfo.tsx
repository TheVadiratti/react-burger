import { useEffect } from 'react';
import orderInfoStyles from './OrderInfo.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import OrderStatus from '../OrderStatus/OrderStatus';
import { getTimeString, getQuantity } from '../../utils/utils';
import useSumCost from '../../hooks/useSumCost';
import useFindIngredient from '../../hooks/useFindIngredient';
import { wsAllOrdersActions, wsMyOrdersActions } from '../../utils/constants';

type TProps = {
  type: string;
};

type TParams = {
  id: string;
};

function OrderInfo({ type }: TProps) {
  const orders = useSelector((state) => state.orders);
  const wsConnected = useSelector((state) => state.ws.wsConnected);
  const params = useParams<TParams>();
  const dispatch = useDispatch();
  const sumCost = useSumCost();
  const findIngredient = useFindIngredient();

  useEffect(() => {
    if (!wsConnected) {
      if (type === 'all') {
        dispatch({
          type: wsAllOrdersActions.start
        });
      }
      else if (type === 'my') {
        dispatch({
          type: wsMyOrdersActions.start
        });
      }
    }

    return () => {
      if (wsConnected) {
        if (type === 'all') {
          dispatch({
            type: wsAllOrdersActions.closed
          });
        }
        else if (type === 'my') {
          dispatch({
            type: wsMyOrdersActions.closed
          });
        }
      }
    }
  }, []);

  const currentOrders = type === 'all' ? orders.all.list : orders.my.list;

  const currentOrder = currentOrders.find(order => {
    return order._id === params.id;
  });

  function renderComponents() {
    if (currentOrder) {
      let renderedIngredients: string[] = [];
      return currentOrder.ingredients.map((ingredient, i) => {
        const currentIngredient = findIngredient(ingredient);
        const hasAlready = renderedIngredients.some(item => {
          return item === ingredient;
        })
        if (!hasAlready && currentIngredient) {
          renderedIngredients.push(ingredient);
          return (
            <li className={orderInfoStyles.component} key={i}>
              <div className={orderInfoStyles.fakeBorder}>
                <div className={orderInfoStyles.img} style={{ backgroundImage: `url(${currentIngredient.image})` }}></div>
              </div>
              <h5 className={`text text_type_main-default ${orderInfoStyles.componentName}`}>{currentIngredient.name}</h5>
              <div className={orderInfoStyles.priceCnt}>
                <span className="text text_type_digits-default">{`${getQuantity(currentOrder.ingredients, ingredient)} x ${currentIngredient.price}`}</span>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          )
        }
      })
    }
  }

  return (
    <>
      {currentOrder ? (
        <div className={orderInfoStyles.info}>
          <span className={`text text_type_digits-default ${orderInfoStyles.num}`}>{'#' + currentOrder.number}</span>
          <h3 className="text text_type_main-medium mt-10">{currentOrder.name}</h3>
          <OrderStatus order={currentOrder} />
          <h4 className="text text_type_main-medium mt-15">Состав:</h4>
          <ul className={`mt-6 pr-8 ${orderInfoStyles.components}`}>
            {renderComponents()}
          </ul>
          <div className={`mt-10 ${orderInfoStyles.timeCnt}`}>
            <span className="text text_type_main-default text_color_inactive">{getTimeString(currentOrder.createdAt)}</span>
            <div className={orderInfoStyles.sumCnt}>
              <span className="text text_type_digits-default">{sumCost(currentOrder)}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      ) : (
        <p className={`text text_type_main-medium ${orderInfoStyles.errorName}`}>Заказ не найден</p>
      )}

    </>
  )
}

export default OrderInfo;
