import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import mainStyles from './Main.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../utils/types';


function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className={`text text_type_main-large mb-4 mt-10 ${mainStyles.heading}`}>Соберите бургер</h1>
      <BurgerIngredients setSelectedIngredient={props.setSelectedIngredient} setOnPopup={props.setOnPopup} setConstructorList={props.setConstructorList} data={props.data} />
      <BurgerConstructor setOnPopup={props.setOnPopup} setOrderData={props.setOrderData} />
    </main>
  )
}

export default Main;

Main.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  setOnPopup: PropTypes.func.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
  setOrderData: PropTypes.func.isRequired
}; 
