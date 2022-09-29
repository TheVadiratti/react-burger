import { useState, useRef } from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const registerHints = [
    {
      text: 'Уже зарегистрированы? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  const onChange = e => {
    setValuePassword(e.target.value)
  }

  return (
    <PageWithForm heading='Регистрация' buttonText='Зарегистрироваться' hints={registerHints}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={e => setValueName(e.target.value)}
        value={valueName}
        name={'register-name'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
      <Input
        type={'email'}
        placeholder={'E-mail'}
        onChange={e => setValueEmail(e.target.value)}
        value={valueEmail}
        name={'register-name'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
      <PasswordInput onChange={onChange} value={valuePassword} name={'register-password'} />
    </PageWithForm>
  )
}

export default Register;