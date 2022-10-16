import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import Feed from '../../pages/Feed/Feed';
import OrderInfo from '../../pages/OrderInfo/OrderInfo';
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
  const modalEnable = useSelector((state) => state.modal.open);
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();
  const location = useLocation();

  const state = useSelector((state) => state);
  console.log(state);

  const byClick = useSelector((state) => state.modal.byClick);

  useEffect(() => {
    if (location.pathname.includes('ingredients/')) {
      dispatch(openIngredientDetailsAction(false));
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path='/feed' exact={true}>
          <Feed />
        </Route>
        <Route path='/feed/id' exact={true}>
          <OrderInfo />
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
          {(modalEnable && modalType === 'OrderDetails') &&
            <Modal heading={''}>
              <OrderDetails />
            </Modal>
          }
        </Route>
      </Switch>
      <Route path='/ingredients/:id' exact>
        {modalEnable &&
          <Modal heading={'Детали ингредиента'}>
            <IngredientDetails />
          </Modal>
        }
      </Route>
    </>
  )
}

export default Main;
