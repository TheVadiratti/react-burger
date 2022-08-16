import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function BurgerConstructor(props) {
  function openOrderDetailsPopup() {
    props.setOnPopup({
      open: true,
      type: 'OrderDetails'
    })
  }

  return (
    <section className={burgerConstructorStyles.section}>
      <div className={burgerConstructorStyles.ingredients}>
        <div className={burgerConstructorStyles.itemLocked}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
        <div className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>
          <div className={burgerConstructorStyles.item}>
            <DragIcon type='primary' />
            <ConstructorElement
                type="bottom"
                isLocked={false}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
          </div>
          <div className={burgerConstructorStyles.item}>
            <DragIcon type='primary' />
            <ConstructorElement
                type="bottom"
                isLocked={false}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
          </div>
          <div className={burgerConstructorStyles.item}>
            <DragIcon type='primary' />
            <ConstructorElement
                type="bottom"
                isLocked={false}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
          </div>
        </div>
        <div className={burgerConstructorStyles.itemLocked}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyles.total} mt-10 pr-4`}>
        <Button type="primary" size="large" onClick={openOrderDetailsPopup}>
          Оформить заказ
        </Button>
        <div className={`${burgerConstructorStyles.sum} mr-10`}>
          <p className={`${burgerConstructorStyles.digit} text text_type_digits-medium mr-2`}>0</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  setOnPopup: PropTypes.func
}; 