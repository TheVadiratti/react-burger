import React from 'react';
import headerStyles from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return <header className={headerStyles.header}>
      <Logo />
    </header>
  }
}

export default AppHeader;