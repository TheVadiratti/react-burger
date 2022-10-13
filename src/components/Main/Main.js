import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import Orders from '../../pages/Orders/Orders';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import Profile from '../../pages/Profile/Profile';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { openIngredientDetailsAction } from '../../services/actions/modal';

function Main() {
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();
  const location = useLocation();
  
  const byClick = useSelector((state) => state.modal.byClick);
  
  useEffect(() => {
    if(location.pathname.includes('ingredients/')) {
      dispatch(openIngredientDetailsAction(false));
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path='/orders' exact={true}>
          <Orders />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/" exact={!byClick}>
          <MainPage />
        </Route>
      </Switch>
      <Route path='/ingredients/:id' exact>
        <Modal heading={modalType === 'IngredientDetails' ? 'Детали ингредиента' : ''}>
          {modalType === 'IngredientDetails' && (
            <IngredientDetails />
          )}
          {modalType === 'OrderDetails' && (
            <OrderDetails />
          )}
        </Modal>
      </Route>
    </>
  )
}

export default Main;
