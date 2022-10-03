import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {
  const [inputDisable, setInputDisable] = useState({name: true, login: true, password: true});
  const userData = useSelector((state) => state.user);

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        value={userData.name}
        icon={'EditIcon'}
        name={'name'}
        size={'default'}
        disabled={inputDisable.name}
        onIconClick={() => { setInputDisable({ ...inputDisable, name: !inputDisable.name }) }}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        value={userData.email}
        icon={'EditIcon'}
        name={'login'}
        size={'default'}
        disabled={inputDisable.login}
        onIconClick={() => { setInputDisable({ ...inputDisable, login: !inputDisable.login }) }}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        value={'вввввв'}
        icon={'EditIcon'}
        name={'password'}
        size={'default'}
        disabled={inputDisable.password}
        onIconClick={() => { setInputDisable({ ...inputDisable, password: !inputDisable.password }) }}
      />
    </>
  )
}

export default ProfileEdit;