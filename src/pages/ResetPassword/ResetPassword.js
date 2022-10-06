import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { showPassword, hidePassword } from '../../utils/utils';
import { resetPasswordFetchAction } from '../../services/actions/account';

function ResetPassword() {
  const [valuePassword, setValuePassword] = useState('');
  const [valueCode, setValueCode] = useState('');
  const [showPasswordState, setShowPassword] = useState({ enable: false, icon: 'ShowIcon' });
  const requestSuccess = useSelector((state) => state.resetPassword.isSuccess);
  const inputPasswordRef = useRef(null);
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem('refreshToken');
  const forgotPasswordHints = [
    {
      text: 'Вспомнили пароль? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  function toggleShowPassword() {
    if (showPasswordState.enable) {
      showPassword(inputPasswordRef);
      setShowPassword({ enable: false, icon: 'ShowIcon' });
    }
    else {
      hidePassword(inputPasswordRef);
      setShowPassword({ enable: true, icon: 'HideIcon' });
    }
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(resetPasswordFetchAction(valuePassword, valueCode));
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
          pathname: '/login'
        }}
      />
    )
  }
  else {
    return (
      <PageWithForm heading='Ввостановление пароля' buttonText='Сохранить' hints={forgotPasswordHints} submitFunc={submitForm}>
        <Input
          type={'password'}
          placeholder={'Введите новый пароль'}
          onChange={e => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'reset-password'}
          error={false}
          icon={showPasswordState.icon}
          errorText={'Ошибка'}
          size={'default'}
          onIconClick={toggleShowPassword}
          ref={inputPasswordRef}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => setValueCode(e.target.value)}
          value={valueCode}
          name={'reset-password-code'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </PageWithForm>
    )
  }
}

export default ResetPassword;