import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyles from './Main.module.css';

function Main(props) {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients data={props.data}/>
    </main>
  )
}

export default Main;