import { useState } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import commonStyles from '../CommonStyles.module.css';
import profileStyles from './Profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  const [inputDisable, setInputDisable] = useState({name: true, login: true, password: true});

  return (
    <main className={`${commonStyles.main} ${profileStyles.main}`}>
      <section>
        <nav>
          <ul className={`text text_type_main-medium ${profileStyles.links}`}>
            <li className={profileStyles.item}><NavLink className={profileStyles.link} activeClassName={profileStyles.link_active} to='/profile'>Профиль</NavLink></li>
            <li className={profileStyles.item}><NavLink className={profileStyles.link} activeClassName={profileStyles.link_active} to='/profile/orders'>История</NavLink></li>
            <li className={profileStyles.item}><NavLink className={profileStyles.link} to='/profile'>Выход</NavLink></li>
          </ul>
        </nav>
        <p className={`text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section className={profileStyles.content}>
        <Switch>
          <Route path='/profile' exact={true}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              value={'Спанч Боб'}
              icon={'EditIcon'}
              name={'name'}
              size={'default'}
              disabled={inputDisable.name}
              onIconClick={() => {setInputDisable({...inputDisable, name: !inputDisable.name})}}
            />
            <Input
              type={'email'}
              placeholder={'Логин'}
              value={'test.mail@mail.ru'}
              icon={'EditIcon'}
              name={'login'}
              size={'default'}
              disabled={inputDisable.login}
              onIconClick={() => {setInputDisable({...inputDisable, login: !inputDisable.login})}}
            />
            <Input
              type={'password'}
              placeholder={'Пароль'}
              value={'вввввв'}
              icon={'EditIcon'}
              name={'password'}
              size={'default'}
              disabled={inputDisable.password}
              onIconClick={() => {setInputDisable({...inputDisable, password: !inputDisable.password})}}
            />
          </Route>
          <Route path='/profile/orders' exact={true}>

          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default Profile;