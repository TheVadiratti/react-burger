import headerStyles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';

function AppHeader() {
  const { pathname } = useLocation();

  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} mt-3 mb-4`}>
        <menu className={headerStyles.menu}>
          <li className={`${headerStyles.item} p-5`}>
            <NavLink to='/' className={headerStyles.link} activeClassName={headerStyles.link_active} exact={true}>
              <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
              <span className='text text_type_main-default ml-2'>Конструктор</span>
            </NavLink>
          </li>
          <li className={`${headerStyles.item} p-5 ml-2`}>
            <NavLink to='/orders' className={headerStyles.link} activeClassName={headerStyles.link_active} exact={true}>
              <ListIcon type={pathname === '/orders' ? 'primary' : 'secondary'} />
              <span className='text text_type_main-default ml-2'>Лента заказов</span>
            </NavLink>
          </li>
        </menu>

        <Logo />

        <NavLink to='/profile' className={headerStyles.link} activeClassName={headerStyles.link_active}>
          <div className={`${headerStyles.profile} p-5`}>
            <ProfileIcon type={pathname.startsWith('/profile') ? 'primary' : 'secondary'} />
            <span className='text text_type_main-default ml-2'>Личный кабинет</span>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;