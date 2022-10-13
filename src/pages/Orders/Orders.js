import ordersStyles from './Orders.module.css';
import OrderInfo from '../../components/OrdersInfo/OrdersInfo';

function Orders() {
  return (
    <main className={ordersStyles.main}>
      <h1 className={`text text_type_main-large mb-5 mt-9 ${ordersStyles.heading}`}>Лента заказов</h1>
      <section className={`${ordersStyles.window}`}>
      </section>
      <OrderInfo />
    </main>
  )
}

export default Orders; 