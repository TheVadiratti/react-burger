import orderInfoStyles from './OrderInfo.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTimeString, getQuantity } from '../../utils/utils';
import useSumCost from '../../hooks/useSumCost';
import useFindIngredient from '../../hooks/useFindIngredient';

function OrderInfo() {
  const orders = useSelector((state) => state.orders.list);
  const params = useParams();
  const sumCost = useSumCost();
  const findIngredient = useFindIngredient();

  const currentOrder = orders.find(order => {
    return order._id === params.id;
  });
  const status = currentOrder.status === 'done';

  console.log(currentOrder);

  function renderComponents() {
    let rendered = [];
    return currentOrder.ingredients.map((ingredient, i) => {
      const currentIngredient = findIngredient(ingredient);
      const hasAlready = rendered.some(item => {
        return item === ingredient;
      })
      if (!hasAlready) {
        rendered.push(ingredient);
        return (
          <li className={orderInfoStyles.component} key={i}>
            <div className={orderInfoStyles.fakeBorder}>
              <div className={orderInfoStyles.img} style={{ backgroundImage: `url(${currentIngredient.image})` }}></div>
            </div>
            <h5 className={`text text_type_main-default ${orderInfoStyles.componentName}`}>{currentIngredient.name}</h5>
            <div className={orderInfoStyles.priceCnt}>
              <span className="text text_type_digits-default">{`${getQuantity(currentOrder.ingredients, ingredient)} x ${currentIngredient.price}`}</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        )
      }
    })
  }

  return (
    <main className={orderInfoStyles.main}>
      <div className={orderInfoStyles.info}>
        <span className={`text text_type_digits-default ${orderInfoStyles.num}`}>{'#' + currentOrder.number}</span>
        <h3 className="text text_type_main-medium mt-10">{currentOrder.name}</h3>
        <span className={`text text_type_main-default mt-3 ${status && orderInfoStyles.status}`}>{status ? ' Выполнен' : ' В работе'}</span>
        <h4 className="text text_type_main-medium mt-15">Состав:</h4>
        <ul className={`mt-6 pr-8 ${orderInfoStyles.components}`}>
          {renderComponents()}
        </ul>
        <div className={`mt-10 ${orderInfoStyles.timeCnt}`}>
          <span className="text text_type_main-default text_color_inactive">{getTimeString(currentOrder.createdAt)}</span>
          <div className={orderInfoStyles.sumCnt}>
            <span className="text text_type_digits-default">{sumCost(currentOrder)}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderInfo;