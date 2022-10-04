import { useState, useEffect } from 'react';
import profileEdidStyles from './ProfileEdit.module.css';
import { useSelector } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {
  const userName = useSelector((state) => state.user.name);
  const userLogin = useSelector((state) => state.user.email);
  const [state, setState] = useState({
    user: {
      name: '',
      email: '',
      password: '111'
    },
    inputState: {
      name: true,
      login: true,
      password: true
    }
  });

  useEffect(() => {
    setState({
      ...state,
      user: {
        ...state.user,
        name: userName,
        email: userLogin
      }
    })
  }, [userName, userLogin]);

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        value={state.user.name}
        icon={'EditIcon'}
        name={'name'}
        size={'default'}
        disabled={state.inputState.name}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, name: !state.inputState.name } }) }}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        value={state.user.email}
        icon={'EditIcon'}
        name={'login'}
        size={'default'}
        disabled={state.inputState.login}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, login: !state.inputState.login } }) }}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        value={state.user.password}
        icon={'EditIcon'}
        name={'password'}
        size={'default'}
        disabled={state.inputState.password}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, password: !state.inputState.password } }) }}
      />
      <div className={profileEdidStyles.buttonsCnt}>
        <Button type="secondary" size="medium">Отмена</Button>
        <Button type="primary" size="medium">Сохранить</Button>
      </div>
    </>
  )
}

export default ProfileEdit;