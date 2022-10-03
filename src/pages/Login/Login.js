import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { authorizationFetchAction } from '../../services/actions/account';

function Login() {
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem('refreshToken');

  const loginHints = [
    {
      text: 'Вы — новый пользователь? ',
      link: 'Зарегистрироваться',
      route: '/register'
    },
    {
      text: 'Забыли пароль? ',
      link: 'Восстановить пароль',
      route: '/forgot-password/'
    }
  ]

  const onChange = e => {
    setValuePassword(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(authorizationFetchAction(valueEmail, valuePassword));
  }

  if (hasToken) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  }
  else {
    return (
      <PageWithForm heading='Вход' buttonText='Войти' hints={loginHints} submitFunc={onSubmit}>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => setValueEmail(e.target.value)}
          value={valueEmail}
          name={'login-email'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
        />
        <PasswordInput onChange={onChange} value={valuePassword} name={'login-password'} />
      </PageWithForm>
    )
  }
}

export default Login;