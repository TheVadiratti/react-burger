import { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { registationFetchAction } from '../../services/actions/account';

function Register() {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const registerHints = [
    {
      text: 'Уже зарегистрированы? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  function onChange(e) {
    setValuePassword(e.target.value)
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(registationFetchAction(valueEmail, valuePassword, valueName));
    history.replace({ pathname: '/' });
  }


  return (
    <PageWithForm heading='Регистрация' buttonText='Зарегистрироваться' hints={registerHints} submitFunc={submitForm}>
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