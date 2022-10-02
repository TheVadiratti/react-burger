import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import ProfileEdit from '../../components/ProfileEdit/ProfileEdit';

function Profile() {
  return (
    <main className={`${commonStyles.main} ${profileStyles.main}`}>
      <section>
        <nav>
          <ul className={`text text_type_main-medium ${profileStyles.links}`}>
            <li className={profileStyles.item}><NavLink to='/profile' className={profileStyles.link} activeClassName={profileStyles.link_active}>Профиль</NavLink></li>
            <li className={profileStyles.item}><NavLink to='/profile/orders' className={profileStyles.link} activeClassName={profileStyles.link_active}>История</NavLink></li>
            <li className={profileStyles.item}><NavLink className={profileStyles.link} to='/profile'>Выход</NavLink></li>
          </ul>
        </nav>
        <p className={`text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section className={profileStyles.content}>
        <Switch>
          <Route path='/profile' exact={true}>
            <ProfileEdit />
          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default Profile;