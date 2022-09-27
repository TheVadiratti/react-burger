import baseInputStyles from './AuthorizationInputs.module.css';

function BaseInput({type, placeholder}) {
  return (
    <input type={type} className={`text text_type_main-default text_color_inactive mb-6 pl-6 ${baseInputStyles.input}`} placeholder={placeholder}></input>
  )
}

export default BaseInput;