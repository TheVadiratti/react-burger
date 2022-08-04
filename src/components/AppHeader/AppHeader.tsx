import React from 'react';
import headerStyles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return <header className={headerStyles.header}>

      <div className={`${headerStyles.container} mt-4 mb-4`}>
        <menu className={headerStyles.menu}>
          <li className={`${headerStyles.item} p-5`}>
            <BurgerIcon type="primary" />
            <span className='text text_type_main-default ml-2'>Конструктор</span>
          </li>
          <li className={`${headerStyles.item} p-5 ml-2`}>
            <ListIcon type="secondary" />
            <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
          </li>
        </menu>

        <Logo />

        <div className={`${headerStyles.profile} p-5`}>
          <ProfileIcon type='secondary' />
          <span className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</span>
        </div>
      </div>
    </header>
  }
}

export default AppHeader;