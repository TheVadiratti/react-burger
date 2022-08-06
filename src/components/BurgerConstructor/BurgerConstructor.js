import burgerConstructorStyles from './BurgerConstructor.module.css';
import data from '../utils/data';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  return (
    <section className={burgerConstructorStyles.section}>
      <div>
        <ConstructorElement
          className={burgerConstructorStyles.item}
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
        <div className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>

          <ConstructorElement
            className={burgerConstructorStyles.item}
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
          <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={false}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
          <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={false}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
          <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={false}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
          <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={false}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
          <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={false}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
        <ConstructorElement
          className={burgerConstructorStyles.item}
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={`${burgerConstructorStyles.total} mt-10`}>
        <Button type="primary" size="large">
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