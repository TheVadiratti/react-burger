import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { ConstructorContext } from '../../services/ConstructorContext';
import { ModalContext } from '../../services/ModalContext';
import { baseUrl } from '../../utils/constants';

function App() {
  const [data, setData] = React.useState([]);
  const [onPopup, setOnPopup] = React.useState({ open: false, type: '' });
  const [selectedIngredient, setSelectedIngredient] = React.useState({});
  const [constructorData, setConstructorData] = React.useState({bun: {}, main: []});
  const [orderData, setOrderData] = React.useState({});

  React.useEffect(() => {
    fetch(`${baseUrl}/api/ingredients/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        setData(res.data);

        // данные с api для первой проверки
        const bun = res.data.find(item => {
          if(item.type === 'bun') {
            return item;
          }
        })
        const main = res.data.filter(item => {
            return item.type !== 'bun';
          }
        )
        setConstructorData({bun: bun, main: main});
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <ModalContext.Provider value={orderData}>
        <ConstructorContext.Provider value={constructorData}>
          <Main
            data={data}
            setOnPopup={setOnPopup}
            setSelectedIngredient={setSelectedIngredient}
            setOrderData={setOrderData}
          />
        </ConstructorContext.Provider>
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
    </div>
  )
}

export default App;
