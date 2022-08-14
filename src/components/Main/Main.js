import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import mainStyles from './Main.module.css';


function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className={`text text_type_main-large mb-5 mt-10 ${mainStyles.heading}`}>Соберите бургер</h1>
      <BurgerIngredients setConstructorList={props.setConstructorList} data={props.data}/>
      <BurgerConstructor />
    </main>
  )
}

export default Main;
