import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../hooks/hooks';
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

function Main() {
  const pageView = useSelector((state) => state.modal.pageView);
  const location = useLocation();
  const isOpenOrder = location.pathname.startsWith('/profile/orders/');

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
          <Route path="/order" exact={true}>
            <Modal isPageType={false}>
              <OrderDetails />
            </Modal>
          </Route>
        </Route>
      </Switch>
      <Route path="/ingredients/:id" exact>
        <Modal isPageType={pageView.ingredient}>
          <IngredientDetails />
        </Modal>
      </Route>
      <Route path="/feed/:id" exact>
        <Modal isPageType={pageView.order}>
          <OrderInfo type="all" />
        </Modal>
      </Route>
      <ProtectedRoute path="/profile/orders/:id" exact>
        <Modal isPageType={pageView.myOrder}>
          <OrderInfo type="my" />
        </Modal>
      </ProtectedRoute>
    </>
  )
}

export default Main;
