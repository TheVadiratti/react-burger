import orderDetailsStyles from './OrderDetails.module.css';
import { useSelector } from '../../hooks/hooks';

function OrderDetails() {
  const { number, isSuccess, isError, message } = useSelector((state) => state.order);

  return (
    <>
      {isSuccess && (
        <>
          <span className='mt-20 text text_type_digits-large'>{number}</span>
          <span className='text text_type_main-medium mt-9'>идентификатор заказа</span>
          <div className={`mt-15 ${orderDetailsStyles.doneIcon}`}></div>
          <span className='text text_type_main-default mt-15'>Ваш заказ начали готовить</span>
          <span className='pb-20 text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
        </>
      )}

      {isError && (
        <>
          <h2 className={`text text_type_main-medium ${orderDetailsStyles.errorName}`}>К сожалению нам не удалось принять заказ</h2>
          <p className={`text text_type_main-medium ${orderDetailsStyles.errorCode}`}>{message}</p>
        </>
      )}
    </>
  )
}

export default OrderDetails;