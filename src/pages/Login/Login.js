import { useRef, useState } from 'react';
import loginStyles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Button, ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { showPassword, hidePassword } from '../../utils/utils';

function Login() {
  const [showPasswordState, setShowPassword] = useState(false);
  const inputPasswordRef = useRef(null);

  function toggleShowPassword() {
    if(showPasswordState) {
      showPassword(inputPasswordRef);
      setShowPassword(false);
    }
    else {
      hidePassword(inputPasswordRef);
      setShowPassword(true);
    }
  }

  return (
    <main className={loginStyles.main}>
      <div className={loginStyles.formCnt}>
        <h2 className={`text text_type_main-medium mb-6 ${loginStyles.heading}`}>Вход</h2>
        <form className={`mb-20 ${loginStyles.form}`}>
          <input type='email' className={`text text_type_main-default text_color_inactive mb-6 pl-6 ${loginStyles.input}`} placeholder='E-mail'></input>
          <div className={loginStyles.inputCnt}>
            <input ref={inputPasswordRef} type='password' className={`text text_type_main-default text_color_inactive mb-6 pl-6 ${loginStyles.input}`} placeholder='Пароль'></input>
            <div onClick={toggleShowPassword} className={loginStyles.icon}>
              {showPasswordState ? <HideIcon type="primary" /> : <ShowIcon type="primary" />}
            </div>
          </div>
          <Button type="primary" size="medium">Войти</Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive mb-4 ${loginStyles.text}`}>Вы — новый пользователь? <Link to='/register' className={loginStyles.link}>Зарегистрироваться</Link></p>
        <p className={`text text_type_main-default text_color_inactive ${loginStyles.text}`}>Забыли пароль? <Link to='/forgot-password' className={loginStyles.link}>Восстановить пароль</Link></p>
      </div>
    </main>
  )
}

export default Login;