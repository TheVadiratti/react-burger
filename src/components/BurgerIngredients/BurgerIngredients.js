import React from 'react';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { openIngredientDetailsAction } from '../../services/actions/actions';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');
  const [state, setState] = React.useState([]);
  const ingredientsData = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  const bunSection = React.useRef(null);
  const sauceSection = React.useRef(null);
  const mainSection = React.useRef(null);

  function scrollOnTarget(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  React.useEffect(() => {
    const loadData = new Promise(function (resolve) {
      if (ingredientsData) {
        resolve();
      }
    });

    loadData.then(() => {
      setState(ingredientsData);
    })

    switch (current) {
      case 'one':
        scrollOnTarget(bunSection);
        break;
      case 'two':
        scrollOnTarget(sauceSection);
        break;
      case 'three':
        scrollOnTarget(mainSection);
        break;
    }
  }, [current, ingredientsData])

  function setCurrentTab(e) {
    setCurrent(e)
  }

  function openIngredientDetailsPopup(e) {
    const id = e.currentTarget.getAttribute('id');
    const selectedIngredientData = state.find(item => {
      return item._id === id;
    });
    dispatch(openIngredientDetailsAction(selectedIngredientData));
  }

  function getInredientsListOfType(type) {
    return state.map(item => {
      if (item.type === `${type}`) {
        return (
          <li onClick={openIngredientDetailsPopup} className={burgerIngredientsStyles.option} key={item._id} id={item._id}>
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
        <Tab value="one" active={current === 'one'} onClick={setCurrentTab}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrentTab}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrentTab}>Начинки</Tab>
      </div>
      <div className={`${burgerIngredientsStyles.window} mt-10`}>
        <div id='one' ref={bunSection}>
          <h2 className='text text_type_main-medium mb-6'>Булки</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
        <div id='two' ref={sauceSection}>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Cоусы</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
        <div id='three' ref={mainSection}>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;