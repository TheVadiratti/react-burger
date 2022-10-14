import ordersStyles from './Feed.module.css';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrdersInfo from '../../components/OrdersInfo/OrdersInfo';

function Feed() {
  return (
    <main className={ordersStyles.main}>
      <h1 className={`text text_type_main-large mb-5 mt-9 ${ordersStyles.heading}`}>Лента заказов</h1>
      <OrdersList />
      <OrdersInfo />
    </main>
  )
}

export default Feed; 