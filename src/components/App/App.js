import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import appStyles from './App.module.css';

function App() {
  let [data, setData] = React.useState([]);
  let [constructorList, setConstructorList] = React.useState([]);
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
    <Main setConstructorList={setConstructorList} data={data}/>
  </div>
  )
}

export default App;
