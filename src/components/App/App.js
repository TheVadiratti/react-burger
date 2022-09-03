import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { ModalContext } from '../../services/ModalContext';
import { setIngredientsList } from '../../services/actions/actions';
import { useDispatch } from 'react-redux';

function App() {
  const [onPopup, setOnPopup] = React.useState({ open: false, type: '' });
  const [selectedIngredient, setSelectedIngredient] = React.useState({});
  const [orderData, setOrderData] = React.useState({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setIngredientsList())
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <ModalContext.Provider value={orderData}>
          <Main
            setOnPopup={setOnPopup}
            setSelectedIngredient={setSelectedIngredient}
            setOrderData={setOrderData}
          />
        {onPopup.open && (
          <Modal heading={onPopup.type === 'IngredientDetails' ? 'Детали ингредиента' : ''} setOnPopup={setOnPopup}>
            {onPopup.type === 'IngredientDetails' && (
              <IngredientDetails />
            )}
            {onPopup.type === 'OrderDetails' && (
              <OrderDetails />
            )}
          </Modal>
        )}
      </ModalContext.Provider>
    </div>
  )
}

export default App;
