import { useRef, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { Redirect } from "react-router-dom";
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { changePasswordFetchAction } from '../../services/actions/account';

function ForgotPassword() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const requestSuccess = useSelector((state) => state.changePassword.isSuccess);
  const hasToken = localStorage.getItem('refreshToken');

  const forgotPasswordHints = [
    {
      text: 'Вспомнили пароль? ',
      link: 'Войти',
      route: '/login'
    }
  ];

  function submitForm(e: FormEvent) {
    e.preventDefault();
    dispatch(changePasswordFetchAction(value));
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
  else if (requestSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
    )
  }
  else {
    return (
      <PageWithForm heading='Восстановление пароля' buttonText='Восстановить' hints={forgotPasswordHints} submitFunc={submitForm}>
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
}

export default ForgotPassword;