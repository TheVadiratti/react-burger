import orderInfoStyles from './OrderInfo.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderInfo () {
  return (
    <main className={orderInfoStyles.main}>
      <div className={orderInfoStyles.info}>
        <span className={`text text_type_digits-default ${orderInfoStyles.num}`}>#034533</span>
        <h3 className="text text_type_main-medium mt-10">Black Hole Singularity острый бургер</h3>
        <span className={`text text_type_main-default mt-3 ${orderInfoStyles.status}`}>Выполнен</span>
        <h4 className="text text_type_main-medium mt-15">Состав:</h4>
        <ul className={`mt-6 pr-8 ${orderInfoStyles.components}`}>
          <li className={orderInfoStyles.component}>
            <div className={orderInfoStyles.img}></div>
            <h5 className={`text text_type_main-default ${orderInfoStyles.componentName}`}>Флюоресцентная булка R2-D3</h5>
            <div className={orderInfoStyles.priceCnt}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        </ul>
        <div className={`mt-10 ${orderInfoStyles.timeCnt}`}>
          <span className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</span>
          <div className={orderInfoStyles.sumCnt}>
            <span className="text text_type_digits-default">510</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderInfo;