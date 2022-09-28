import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  
  const forgotPasswordHints = [
    {
      text: 'Вспомнили пароль? ',
      link: 'Войти',
      route: '/login'
    }
  ];

  return (
    <PageWithForm heading='Восстановление пароля' buttonText='Восстановить' hints={forgotPasswordHints}>
      <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={e => setValue(e.target.value)}
        value={value}
        name={'forgot-email'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
    </PageWithForm>
  )
}

export default ForgotPassword;