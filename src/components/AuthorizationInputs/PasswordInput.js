import { useRef, useState } from 'react';
import passwordInputStyles from './PasswordInput.module.css';
import baseInputStyles from './AuthorizationInputs.module.css';
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { showPassword, hidePassword } from '../../utils/utils';

function PasswordInput({margin, placeholder}) {
  const [showPasswordState, setShowPassword] = useState(false);
  const inputPasswordRef = useRef(null);

  function toggleShowPassword() {
    if (showPasswordState) {
      showPassword(inputPasswordRef);
      setShowPassword(false);
    }
    else {
      hidePassword(inputPasswordRef);
      setShowPassword(true);
    }
  }

  return (
    <div className={`${margin} ${passwordInputStyles.inputCnt}`}>
      <input ref={inputPasswordRef} type='password' className={`text text_type_main-default text_color_inactive mb-6 pl-6 ${baseInputStyles.input}`} placeholder={placeholder}></input>
      <div onClick={toggleShowPassword} className={passwordInputStyles.icon}>
        {showPasswordState ? <HideIcon type="primary" /> : <ShowIcon type="primary" />}
      </div>
    </div>
  )
}

export default PasswordInput;