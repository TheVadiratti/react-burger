import orderInfoStyles from './OrdersInfo.module.css';

function OrdersInfo() {
  return (
    <section>
      <div className={orderInfoStyles.statuses}>
        <div className={orderInfoStyles.numbersCnt}>
          <h3 className='text text_type_main-medium'>Готовы:</h3>
          <ul className={`mt-6 ${orderInfoStyles.list}`}>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberComplited}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberComplited}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberComplited}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberComplited}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberComplited}`}>034533</li>
          </ul>
        </div>
        <div>
          <h3 className='text text_type_main-medium'>В работе:</h3>
          <ul className={`mt-6 ${orderInfoStyles.list}`}>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberInProgress}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberInProgress}`}>034533</li>
            <li className={`text text_type_digits-default mt-2 ${orderInfoStyles.numberInProgress}`}>034533</li>
          </ul>
        </div>
      </div>
      <div className='mt-15'>
        <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
        <span className={`text text_type_digits-large ${orderInfoStyles.digit}`}>28 752</span>
      </div>
      <div className='mt-15'>
        <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
        <span className={`text text_type_digits-large ${orderInfoStyles.digit}`}>138</span>
      </div>
    </section>
  )
}

export default OrdersInfo;