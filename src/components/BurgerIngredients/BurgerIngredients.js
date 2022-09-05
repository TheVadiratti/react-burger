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

  const windowCntRef = React.useRef(null);
  const bunSectionRef = React.useRef(null);
  const sauceSectionRef = React.useRef(null);
  const mainSectionRef = React.useRef(null);

  function autoToggleByScroll() {
    const bunSectionDist = Math.abs(windowCntRef.current.getBoundingClientRect().top - bunSectionRef.current.getBoundingClientRect().top);
    const sauceSectionDist = Math.abs(windowCntRef.current.getBoundingClientRect().top - sauceSectionRef.current.getBoundingClientRect().top);
    const mainSectionDist = Math.abs(windowCntRef.current.getBoundingClientRect().top - mainSectionRef.current.getBoundingClientRect().top);

    const bottomWindow = windowCntRef.current.getBoundingClientRect().bottom;
    const bottomLastEl = mainSectionRef.current.getBoundingClientRect().bottom;

    const minDist = Math.min(bunSectionDist, sauceSectionDist, mainSectionDist);

    switch (minDist) {
      case bunSectionDist:
        setCurrent('one');
        break;
      case sauceSectionDist:
        setCurrent('two');
        break;
      case mainSectionDist:
        setCurrent('three');
        break;
    }

    // для корректного отображения навигации при малом кол-ве ингредиентов
    // переключится на последний таб, если прокрутят до дна
    if(bottomWindow === bottomLastEl) {
      setCurrent('three');
    }
  }

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
  }, [ingredientsData])

  function setCurrentTab(e) {
    setCurrent(e)
    switch (e) {
      case 'one':
        scrollOnTarget(bunSectionRef);
        break;
      case 'two':
        scrollOnTarget(sauceSectionRef);
        break;
      case 'three':
        scrollOnTarget(mainSectionRef);
        break;
    }
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
      <div ref={windowCntRef} onScroll={autoToggleByScroll} className={`${burgerIngredientsStyles.window} mt-10`}>
        <div id='one' ref={bunSectionRef}>
          <h2 className='text text_type_main-medium mb-6'>Булки</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
        <div id='two' ref={sauceSectionRef}>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Cоусы</h2>
          <div className={burgerIngredientsStyles.options}>
            {getInredientsListOfType('sauce')}
          </div>
        </div>
        <div id='three' ref={mainSectionRef}>
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