import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {
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
  const userName = useSelector((state) => state.user.name);
  const userLogin = useSelector((state) => state.user.login);

  useEffect(() => {
    setState({
      ...state,
      user: {
        ...state.user,
        name: userName,
        login: userLogin
    }})
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
        onIconClick={() => { setState({ ...state, inputState: {...state.inputState, name: !state.inputState.name} }) }}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        value={state.user.email}
        icon={'EditIcon'}
        name={'login'}
        size={'default'}
        disabled={state.inputState.login}
        onIconClick={() => { setState({ ...state, inputState: {...state.inputState, login: !state.inputState.login} }) }}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        value={state.user.password}
        icon={'EditIcon'}
        name={'password'}
        size={'default'}
        disabled={state.inputState.password}
        onIconClick={() => { setState({ ...state, inputState: {...state.inputState, password: !state.inputState.password} }) }}
      />
    </>
  )
}

export default ProfileEdit;