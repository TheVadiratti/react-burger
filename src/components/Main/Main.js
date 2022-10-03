import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import Profile from '../../pages/Profile/Profile';

function Main() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <MainPage />
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
      <ProtectedRoute path="/profile" redirectPath="/login">
        <Profile />
      </ProtectedRoute>
    </Switch>
  )
}

export default Main;
