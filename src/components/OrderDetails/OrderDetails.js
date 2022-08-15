import orderDetailsStyles from './OrderDetails.module.css';

function OrderDetails() {
  return (
    <>
      <span className='pt-7 text text_type_digits-large'>034563</span>
      <span className='text text_type_main-medium mt-9'>идентификатор заказа</span>
      <div className={`mt-15 ${orderDetailsStyles.doneIcon}`}></div>
      <span className='text text_type_main-default mt-15'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
    </>
  )
}

export default OrderDetails;