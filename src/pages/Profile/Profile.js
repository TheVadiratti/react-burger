import { NavLink } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import ProfileEdit from '../../components/ProfileEdit/ProfileEdit';

function Profile() {
  return (
    <main className={`${commonStyles.main} ${profileStyles.main}`}>
      <section>
        <nav>
          <ul className={`text text_type_main-medium ${profileStyles.links}`}>
            <li className={profileStyles.item}><NavLink to='/profile' className={profileStyles.link} activeStyle={{color: "#F2F2F3"}} exact={true}>Профиль</NavLink></li>
            <li className={profileStyles.item}><NavLink to='/profile/orders' className={profileStyles.link} activeStyle={{color: "#F2F2F3"}} exact={true}>История</NavLink></li>
            <li className={profileStyles.item}><NavLink to='/' className={profileStyles.link} exact={true}>Выход</NavLink></li>
          </ul>
        </nav>
        <p className={`text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section className={profileStyles.content}>
        <Switch>
          <Route path='/profile' exact={true}>
            <ProfileEdit />
          </Route>
          <Route path='/profile/orders' exact={true}>
            <p>Anything</p>
          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default Profile;