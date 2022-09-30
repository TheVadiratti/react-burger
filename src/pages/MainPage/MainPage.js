import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import commonStyles from '../CommonStyles.module.css';
import mainPageStyles from './MainPage.module.css';

function MainPage() {
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

export default MainPage;