import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { setIngredientsListAction } from '../../services/actions/ingredients';
import { useDispatch } from "../../hooks/hooks";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setIngredientsListAction())
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main />
    </div>
  )
}

export default App;
