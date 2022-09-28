import { useState, useRef } from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);

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

  return (
    <PageWithForm heading='Вход' buttonText='Войти' hints={loginHints}>
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

export default Login;