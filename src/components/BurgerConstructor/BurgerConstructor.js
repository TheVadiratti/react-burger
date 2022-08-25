import React from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ConstructorContext } from '../../services/ConstructorContext';

function BurgerConstructor(props) {
  const ingredientData = React.useContext(ConstructorContext);

  function openOrderDetailsPopup() {
    props.setOnPopup({
      open: true,
      type: 'OrderDetails'
    })
  }

  function createIngredient(ingredient, type, isLocked, isMain, text, key) {
    return (
      <div className={isMain ? burgerConstructorStyles.item : burgerConstructorStyles.itemLocked} key={key}>
        {isMain && <DragIcon type='primary' />}
        <ConstructorElement
          type={isMain ? '' : type}
          isLocked={isLocked}
          text={`${ingredient.name} ${text}`}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      </div> 
    )
  }

  function sum() {
    const bunSum = ingredientData.bun.price * 2;
    const mainPriceArray = ingredientData.main.map(item => {
      return item.price;
    });
    const mainSum = mainPriceArray.reduce((prev, current) => {
      return prev + current;
    }, mainPriceArray[0]); 
    return mainSum + bunSum;
  }

  return (
    <section className={burgerConstructorStyles.section}>
      <div className={burgerConstructorStyles.ingredients}>

        {createIngredient(ingredientData.bun, 'top', true, false, '(верх)', 1)}

        <div className={`mt-4 mb-4 ${burgerConstructorStyles.window}`}>

          {ingredientData.main.map(item => {
            return createIngredient(item, false, false, true, '', item._id);
          })}

        </div>
        
        {createIngredient(ingredientData.bun, 'bottom', true, false, '(низ)', 2)}

      </div>
      <div className={`${burgerConstructorStyles.total} mt-10 pr-4`}>
        <Button type="primary" size="large" onClick={openOrderDetailsPopup}>
          Оформить заказ
        </Button>
        <div className={`${burgerConstructorStyles.sum} mr-10`}>
          <p className={`${burgerConstructorStyles.digit} text text_type_digits-medium mr-2`}>{sum()}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  setOnPopup: PropTypes.func.isRequired
}; 