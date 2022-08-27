import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import mainStyles from './Main.module.css';
import PropTypes from 'prop-types';


function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className={`text text_type_main-large mb-4 mt-10 ${mainStyles.heading}`}>Соберите бургер</h1>
      <BurgerIngredients setSelectedIngredient={props.setSelectedIngredient} setOnPopup={props.setOnPopup} setConstructorList={props.setConstructorList} />
      <BurgerConstructor setOnPopup={props.setOnPopup} setOrderData={props.setOrderData} />
    </main>
  )
}

export default Main;

Main.propTypes = {
  setOnPopup: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
  setOrderData: PropTypes.func.isRequired
}; 
