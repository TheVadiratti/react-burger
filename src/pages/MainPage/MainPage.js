import { useSelector } from 'react-redux';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import Loader from '../../components/Loader/Loader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import commonStyles from '../CommonStyles.module.css';
import mainPageStyles from './MainPage.module.css';

function MainPage() {
  const isLoaded = useSelector((state) => state.ingredients.isLoaded);
  const isSuccess = useSelector((state) => state.ingredients.isSuccess);
  if (isLoaded) {
    return (
      <Loader />
    )
  }
  else if (isSuccess) {
    return (
      <main className={`${commonStyles.main} ${mainPageStyles.main}`}>
        <h1 className={`text text_type_main-large mb-4 mt-10 ${mainPageStyles.heading}`}>Соберите бургер</h1>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    )
  }
}

export default MainPage;