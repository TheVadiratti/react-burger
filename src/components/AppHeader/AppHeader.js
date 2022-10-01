import headerStyles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} mt-3 mb-4`}>
        <menu className={headerStyles.menu}>
          <li className={`${headerStyles.item} p-5`}>
            <NavLink to='/' className={headerStyles.link} activeClassName={headerStyles.link_active}>
              <BurgerIcon type="secondary" />
              <span className='text text_type_main-default ml-2'>Конструктор</span>
            </NavLink>
          </li>
          <li className={`${headerStyles.item} p-5 ml-2`}>
            <NavLink to='/orders' className={headerStyles.link} activeClassName={headerStyles.link_active}>
              <ListIcon type="secondary" />
              <span className='text text_type_main-default ml-2'>Лента заказов</span>
            </NavLink>
          </li>
        </menu>

        <Logo />

        <NavLink to='/profile' className={headerStyles.link} activeClassName={headerStyles.link_active}>
          <div className={`${headerStyles.profile} p-5`}>
            <ProfileIcon type='secondary' />
            <span className='text text_type_main-default ml-2'>Личный кабинет</span>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;