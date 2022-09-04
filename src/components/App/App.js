import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { setIngredientsListAction } from '../../services/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const modalEnabled = useSelector((state) => state.modal.open);
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setIngredientsListAction())
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main />
      {modalEnabled && (
        <Modal heading={modalType === 'IngredientDetails' ? 'Детали ингредиента' : ''}>
          {modalType === 'IngredientDetails' && (
            <IngredientDetails />
          )}
          {modalType === 'OrderDetails' && (
            <OrderDetails />
          )}
        </Modal>
      )}
    </div>
  )
}

export default App;
