import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  return (
    <main className={`${commonStyles.main} ${profileStyles.main}`}>
      <section>
        <nav>
          <ul className={`text text_type_main-medium ${profileStyles.links}`}>
            <li className={profileStyles.item}><Link className={profileStyles.link} to='/profile'>Профиль</Link></li>
            <li className={profileStyles.item}><Link className={profileStyles.link} to='/profile/orders'>История</Link></li>
            <li className={profileStyles.item}><Link className={profileStyles.link}>Выход</Link></li>
          </ul>
        </nav>
        <p className={`text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section className={profileStyles.content}>
        <Route path='/profile/' exact={true}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            icon={'EditIcon'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
          <Input
            type={'email'}
            placeholder={'Логин'}
            icon={'EditIcon'}
            name={'login'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            icon={'EditIcon'}
            name={'password'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </Route>
        <Route path='/profile/orders' exact={true}>

        </Route>
      </section>
    </main>
  )
}

export default Profile;