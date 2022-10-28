import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ordersStyles from './Feed.module.css';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrdersInfo from '../../components/OrdersInfo/OrdersInfo';
import { wsAllOrdersActions } from '../../utils/constants';
import Loader from '../../components/Loader/Loader';

function Feed() {
  const data = useSelector((state) => state.orders.all);
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

  if (!data.total || !data.totalToday || !data.list) {
    return (
      <Loader />
    )
  }
  else {
    return (
      <main className={ordersStyles.main}>
        <h1 className={`text text_type_main-large mb-5 mt-9 ${ordersStyles.heading}`}>Лента заказов</h1>
        <OrdersList />
        <OrdersInfo />
      </main>
    )
  }
}

export default Feed; 