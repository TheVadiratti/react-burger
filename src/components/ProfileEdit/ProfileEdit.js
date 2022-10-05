import { useState, useEffect, useRef } from 'react';
import profileEdidStyles from './ProfileEdit.module.css';
import { useSelector } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {
  const initialState = {
    user: {
      name: '',
      login: '',
      password: 'password'
    },
    inputState: {
      name: true,
      login: true,
      password: true
    }
  };
  const [state, setState] = useState(initialState);
  const userName = useSelector((state) => state.user.name);
  const userLogin = useSelector((state) => state.user.email);
  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setState({
      ...state,
      user: {
        ...state.user,
        name: userName,
        login: userLogin
      }
    })
    console.log(nameRef.current.value, userName);
  }, [userName, userLogin]);

  function renderButtons() {
    if (state.user.name !== userName || state.user.login !== userLogin || state.user.password !== initialState.user.password) {
      return (
        <div className={profileEdidStyles.buttonsCnt}>
          <Button type="secondary" size="medium">Отмена</Button>
          <Button type="primary" size="medium">Сохранить</Button>
        </div>
      )
    }
  }

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        value={state.user.name}
        onChange={e => setState({ ...state, user: { ...state.user, name: e.target.value } })}
        icon={'EditIcon'}
        name={'name'}
        size={'default'}
        disabled={state.inputState.name}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, name: !state.inputState.name } }) }}
        ref={nameRef}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        value={state.user.login}
        onChange={e => setState({ ...state, user: { ...state.user, login: e.target.value } })}
        icon={'EditIcon'}
        name={'login'}
        size={'default'}
        disabled={state.inputState.login}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, login: !state.inputState.login } }) }}
        ref={loginRef}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        value={state.user.password}
        onChange={e => setState({ ...state, user: { ...state.user, password: e.target.value } })}
        icon={'EditIcon'}
        name={'password'}
        size={'default'}
        disabled={state.inputState.password}
        onIconClick={() => { setState({ ...state, inputState: { ...state.inputState, password: !state.inputState.password } }) }}
        ref={passwordRef}
      />
      {renderButtons()}
    </>
  )
}

export default ProfileEdit;