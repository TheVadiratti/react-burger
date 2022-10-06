import { useState, useEffect, useRef } from 'react';
import profileEdidStyles from './ProfileEdit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserDataFetchAction } from '../../services/actions/user';

function ProfileEdit() {
  const initialUserState = {
    name: '',
    login: '',
    password: 'password'
  };
  const initialInputState = {
    name: true,
    login: true,
    password: true
  };
  const [userState, setUserState] = useState(initialUserState);
  const [inputState, setInputState] = useState(initialInputState);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const userLogin = useSelector((state) => state.user.email);
  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setUserState({
      ...userState,
      name: userName,
      login: userLogin
    })
  }, [userName, userLogin]);

  function renderButtons() {
    if (userState.name !== userName || userState.login !== userLogin || userState.password !== initialUserState.password) {
      return (
        <div className={profileEdidStyles.buttonsCnt}>
          <Button type="secondary" size="medium" htmlType='reset'>Отмена</Button>
          <Button type="primary" size="medium" htmlType='submit'>Сохранить</Button>
        </div>
      )
    }
  }

  function submitForm() {
    let data = {};
    if (userState.name !== userName) {
      data.name = userState.name;
    }
    if (userState.login !== userLogin) {
      data.login = userState.login;
    }
    if (userState.password !== initialUserState.password) {
      data.password = userState.password;
      setUserState({ ...userState, password: initialUserState.password })
    }
    dispatch(updateUserDataFetchAction(data));
    setInputState(initialInputState);
  }

  return (
    <form className={profileEdidStyles.form} onSubmit={submitForm}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        value={userState.name}
        onChange={e => setUserState({ ...userState, name: e.target.value })}
        icon={'EditIcon'}
        name={'name'}
        size={'default'}
        disabled={inputState.name}
        onIconClick={() => { setInputState({ ...inputState, name: !inputState.name }) }}
        ref={nameRef}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        value={userState.login}
        onChange={e => setUserState({ ...userState, login: e.target.value })}
        icon={'EditIcon'}
        name={'login'}
        size={'default'}
        disabled={inputState.login}
        onIconClick={() => { setInputState({ ...inputState, login: !inputState.login }) }}
        ref={loginRef}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        value={userState.password}
        onChange={e => setUserState({ ...userState, password: e.target.value })}
        icon={'EditIcon'}
        name={'password'}
        size={'default'}
        disabled={inputState.password}
        onIconClick={() => { setInputState({ ...inputState, password: !inputState.password }) }}
        ref={passwordRef}
      />
      {renderButtons()}
    </form>
  )
}

export default ProfileEdit;