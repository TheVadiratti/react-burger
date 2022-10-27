import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import Feed from '../../pages/Feed/Feed';
import OrderInfo from '../OrderInfo/OrderInfo';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import Profile from '../../pages/Profile/Profile';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { openIngredientDetailsAction, openOrderInfoAction } from '../../services/actions/modal';

function Main() {
  const modalEnable = useSelector((state) => state.modal.open);
  const modalType = useSelector((state) => state.modal.type);
  const pageView = useSelector((state) => state.modal.pageView);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('ingredients/')) {
      dispatch(openIngredientDetailsAction());
    }
    if (location.pathname.includes('feed/')) {
      dispatch(openOrderInfoAction());
    }
    if (location.pathname.includes('profile/orders/')) {
      dispatch(openOrderInfoAction());
    }
  }, []);

  const isOpenOrder = location.pathname.startsWith('/profile/orders/');
  console.log(isOpenOrder);

  return (
    <>
      <Switch>
        <Route path="/feed" exact={pageView.order}>
          <Feed />
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
        <ProtectedRoute path="/profile" exact={pageView.myOrder && isOpenOrder}>
          <Profile />
        </ProtectedRoute>
        <Route path="/" exact={pageView.ingredient}>
          <MainPage />
          {(modalEnable && modalType === 'OrderDetails') &&
            <Modal heading={''} prePage={'/'}>
              <OrderDetails />
            </Modal>
          }
        </Route>
      </Switch>
      <Route path="/ingredients/:id" exact>
        {modalEnable &&
          <Modal heading={'Детали ингредиента'} prePage={'/'}>
            <IngredientDetails />
          </Modal>
        }
      </Route>
      <Route path="/feed/:id" exact>
        {modalEnable &&
          <Modal prePage={'/feed'}>
            <OrderInfo type="all" />
          </Modal>
        }
      </Route>
      <ProtectedRoute path="/profile/orders/:id" exact>
        {modalEnable &&
          <Modal prePage={'/profile/orders'}>
            <OrderInfo type="my" />
          </Modal>
        }
      </ProtectedRoute>
    </>
  )
}

export default Main;
