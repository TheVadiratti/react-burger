import orderInfoStyles from './OrdersInfo.module.css';
import { useSelector } from 'react-redux';

function OrdersInfo() {
  const orders = useSelector((state) => state.orders.all);
  const maxRenderNumber = 20;
  console.log(orders);

  function renderNumbers(type) {
    return orders.list.map((order, i) => {
      if (i < maxRenderNumber) {
        if (type === 'done' && type === order.status) {
          return (
            <li className={`text text_type_digits-default ${orderInfoStyles.numberComplited}`} key={i}>{order.number}</li>
          )
        }
        else if (type === 'pending' && type === order.status) {
          return (
            <li className={`text text_type_digits-default ${orderInfoStyles.numberInProgress}`} key={i}>{order.number}</li>
          )
        }
      }
    })
  }

  return (
    <section>
      <div className={orderInfoStyles.statuses}>
        <div className={orderInfoStyles.numbersCnt}>
          <h3 className='text text_type_main-medium'>Готовы:</h3>
          <ul className={`mt-6 ${orderInfoStyles.list}`}>
            {renderNumbers('done')}
          </ul>
        </div>
        <div>
          <h3 className='text text_type_main-medium'>В работе:</h3>
          <ul className={`mt-6 ${orderInfoStyles.list}`}>
            {renderNumbers('pending')}
          </ul>
        </div>
      </div>
      <div className='mt-15'>
        <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
        <span className={`text text_type_digits-large ${orderInfoStyles.digit}`}>{orders.total}</span>
      </div>
      <div className='mt-15'>
        <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
        <span className={`text text_type_digits-large ${orderInfoStyles.digit}`}>{orders.totalToday}</span>
      </div>
    </section>
  )
}

export default OrdersInfo;