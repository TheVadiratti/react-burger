import ordersListStyles from './OrdersList.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrdersList() {
  return (
    <section className={`${ordersListStyles.window}`}>
      <div className={`p-6 ${ordersListStyles.item}`}>
        <div className={ordersListStyles.info}>
          <span className='text text_type_digits-default'>#034535</span>
          <span className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</span>
        </div>
        <h4 className='text text_type_main-medium'>Death Star Starship Main бургер</h4>
        <div className={ordersListStyles.componentsCnt}>
          <div className={ordersListStyles.components}></div>
          <div className={ordersListStyles.sum}>
            <span className='text text_type_digits-default'>480</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrdersList;