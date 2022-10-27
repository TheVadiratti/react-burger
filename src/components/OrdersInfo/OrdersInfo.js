import orderInfoStyles from './OrdersInfo.module.css';
import { useSelector } from 'react-redux';

function OrdersInfo() {
  const orders = useSelector((state) => state.orders.all);

  function renderNumbers(type) {
    return orders.list.map((order, i) => {
      if (i < 20) {
        if (type === 'done') {
          return (
            <li className={`text text_type_digits-default ${orderInfoStyles.numberComplited}`} key={i}>{order.number}</li>
          )
        }
        else {
          <li className={`text text_type_digits-default ${orderInfoStyles.numberInProgress}`}>{order.number}</li>
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
            {renderNumbers('work')}
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