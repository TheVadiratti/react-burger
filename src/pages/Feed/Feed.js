import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ordersStyles from './Feed.module.css';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrdersInfo from '../../components/OrdersInfo/OrdersInfo';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../utils/constants';

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED
      })
    }
  }, []);

  return (
    <main className={ordersStyles.main}>
      <h1 className={`text text_type_main-large mb-5 mt-9 ${ordersStyles.heading}`}>Лента заказов</h1>
      <OrdersList />
      <OrdersInfo />
    </main>
  )
}

export default Feed; 