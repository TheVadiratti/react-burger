import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Orders from "../Orders/Orders";
import { logoutFetchAction } from "../../services/actions/account";
import { getUserDataFetchAction } from '../../services/actions/user';
import Loader from "../../components/Loader/Loader";
import { wsMyOrdersActions } from "../../utils/constants";

function Profile() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const pageView = useSelector((state) => state.modal.pageView);
  const isDataLoaded = useSelector((state) => state.getUserData.isLoaded);
  const data = useSelector((state) => state.orders.my);
  const hasToken = localStorage.getItem('accessToken');

  useEffect(() => {
    dispatch(getUserDataFetchAction());
    if (hasToken) {
      dispatch({
        type: wsMyOrdersActions.start
      });
    }
    switch (location.pathname) {
      case '/profile':
        setDescription('В этом разделе вы можете изменить свои персональные данные');
        break;
      case '/profile/orders':
        setDescription('В этом разделе вы можете просмотреть свою историю заказов');
        break;
    }
    return () => {
      dispatch({
        type: wsMyOrdersActions.closed
      });
    }
  }, [hasToken, location]);

  function logout() {
    dispatch(logoutFetchAction());
  }

  if (isDataLoaded || !data.list || !hasToken) {
    return (
      <Loader />
    )
  }
  else {
    return (
      <main className={`${commonStyles.main} ${profileStyles.main}`}>
        <section>
          <nav>
            <ul className={`text text_type_main-medium ${profileStyles.links}`}>
              <li className={profileStyles.item}><NavLink to="/profile" className={profileStyles.link} activeStyle={{ color: "#F2F2F3" }} exact>Профиль</NavLink></li>
              <li className={profileStyles.item}><NavLink to="/profile/orders" className={profileStyles.link} activeStyle={{ color: "#F2F2F3" }} exact>История заказов</NavLink></li>
              <li onClick={logout} className={profileStyles.item}><span className={profileStyles.link}>Выход</span></li>
            </ul>
          </nav>
          <p className={`text text_type_main-default text_color_inactive mt-20`}>{description}</p>
        </section>
        <section className={profileStyles.content}>
          <Switch>
            <Route path="/profile" exact>
              <ProfileForm />
            </Route>
            <Route path="/profile/orders" exact={pageView.myOrder}>
              <Orders />
            </Route>
          </Switch>
        </section>
      </main>
    )
  }
}

export default Profile;