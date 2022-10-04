import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import ProfileEdit from '../../components/ProfileEdit/ProfileEdit';
import { logoutFetchAction } from "../../services/actions/account";
import { getUserDataFetchAction } from '../../services/actions/user';

function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataFetchAction());
  }, [])

  function logout() {
    dispatch(logoutFetchAction());
  }

  return (
    <main className={`${commonStyles.main} ${profileStyles.main}`}>
      <section>
        <nav>
          <ul className={`text text_type_main-medium ${profileStyles.links}`}>
            <li className={profileStyles.item}><NavLink to="/profile" className={profileStyles.link} activeStyle={{color: "#F2F2F3"}} exact>Профиль</NavLink></li>
            <li className={profileStyles.item}><NavLink to="/profile/orders" className={profileStyles.link} activeStyle={{color: "#F2F2F3"}} exact>История</NavLink></li>
            <li onClick={logout} className={profileStyles.item}><NavLink to="/login" className={profileStyles.link} exact>Выход</NavLink></li>
          </ul>
        </nav>
        <p className={`text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section className={profileStyles.content}>
        <Switch>
          <Route path="/profile" exact>
            <ProfileEdit />
          </Route>
          <Route path="/profile/orders" exact>
            <p>Anything</p>
          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default Profile;