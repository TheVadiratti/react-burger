import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import appStyles from './App.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';

function App() {
  let [data, setData] = React.useState([]);
  let [constructorList, setConstructorList] = React.useState([]);
  let [onPopup, setOnPopup] = React.useState({open: false, type: ''});
  let [selectedIngredient, setSelectedIngredient] = React.useState({});
  const baseUrl = 'https://norma.nomoreparties.space/api/ingredients/';

  React.useEffect(() => {
    fetch(baseUrl)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        setData(data = res.data);
      })
      .catch(error => {
        console.log(error);
      })
  });

  return (
  <div className={appStyles.app}>
    <AppHeader />
    <Main
      setConstructorList={setConstructorList}
      data={data}
      setOnPopup={setOnPopup}
      setSelectedIngredient={setSelectedIngredient}
    />
    {onPopup.open && (
      <ModalOverlay>
        {onPopup.type === 'IngredientDetails' && (
          <IngredientDetails data={selectedIngredient} />
        )}
        {onPopup.type === 'OrderDetails' && (
          <OrderDetails />
        )}
      </ModalOverlay>
    )}
  </div>
  )
}

export default App;
