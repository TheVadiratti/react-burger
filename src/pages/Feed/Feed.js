import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ordersStyles from './Feed.module.css';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrdersInfo from '../../components/OrdersInfo/OrdersInfo';
import { wsAllOrdersActions } from '../../utils/constants';

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: wsAllOrdersActions.start
    });
    return () => {
      dispatch({
        type: wsAllOrdersActions.closed
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