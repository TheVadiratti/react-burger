import React from 'react';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')

  function getInredientsListOfType(type) {
    return props.data.map(item => {
      if(item.type === `${type}`) {
        return (
          <li className={burgerIngredientsStyles.option} key={item._id}>
            <img className="mb-2" src={item.image} alt={item.name}></img>
            <div className={`${burgerIngredientsStyles.priceCnt} mb-2`}>
              <span className="text text_type_digits-default mr-2">{item.price}</span>
              <CurrencyIcon type="primary" />
            </div>
            <h3 className="text text_type_main-default">{item.name}</h3>
            <Counter count={1} size="default" />
          </li>
        )
      }
    })
  }

  return (
    <section className={burgerIngredientsStyles.section}>
      <div className={burgerIngredientsStyles.menu}>
        <Tab value="булки" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
        <Tab value="соусы" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
        <Tab value="начинки" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
      </div>
      <div className={`${burgerIngredientsStyles.window} mt-10`}>
        <div>
          <h2 className={`text text_type_main-medium ${burgerIngredientsStyles.subheading}`}>Булки</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('bun')}
          </div>
        </div>
        <div>
          <h2 className={`text text_type_main-medium ${burgerIngredientsStyles.subheading}`}>Cоусы</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
        <div>
          <h2 className={`text text_type_main-medium ${burgerIngredientsStyles.subheading}`}>Начинки</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('main')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.array
}; 