import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { ModalContext } from '../../services/ModalContext';
import { baseUrl } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

import { BurgerContext } from '../../services/BurgerContext';

function App() {
  const [data, setData] = React.useState([]);
  const [onPopup, setOnPopup] = React.useState({ open: false, type: '' });
  const [selectedIngredient, setSelectedIngredient] = React.useState({});
  const [orderData, setOrderData] = React.useState({});

  React.useEffect(() => {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(checkResponse)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className={appStyles.app}>
      <BurgerContext.Provider value={data}>
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
                <IngredientDetails data={selectedIngredient} />
              )}
              {onPopup.type === 'OrderDetails' && (
                <OrderDetails />
              )}
            </Modal>
          )}
        </ModalContext.Provider>
      </BurgerContext.Provider>
    </div>
  )
}

export default App;
