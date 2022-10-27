import orderStatusStyles from './OrderStatus.module.css';

function OrderStatus({ order }) {
  function getStatus () {
    switch(order.status) {
      case 'done':
        return 'Выполнен';
      case 'pending':
        return 'В работе';
      case 'created':
        return 'Создан';
    }
  }

  return (
    <span className={`text text_type_main-default mt-3 ${order.status === 'done' && orderStatusStyles.status}`}>{getStatus()}</span>
  )
}

export default OrderStatus;