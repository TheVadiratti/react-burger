import { useState, useEffect, useRef } from 'react';
import profileEdidStyles from './ProfileEdit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserDataFetchAction } from '../../services/actions/user';

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
  const dispatch = useDispatch();
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
          <Button type="secondary" size="medium" htmlType='reset'>Отмена</Button>
          <Button type="primary" size="medium" htmlType='submit' onClick={submitForm}>Сохранить</Button>
        </div>
      )
    }
  }

  function submitForm() {
    let data = {};
    if (state.user.name !== userName) {
      data.name = state.user.name;
    }
    if (state.user.login !== userLogin) {
      data.login = state.user.login;
    }
    if (state.user.password !== initialState.user.password) {
      data.password = state.user.password;
      setState({...state, user: {...state.user, password: initialState.user.password}})
    }
    dispatch(updateUserDataFetchAction(data));
    setState({ ...state, inputState: initialState.inputState });
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