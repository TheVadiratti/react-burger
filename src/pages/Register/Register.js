import PageWithForm from '../../components/PageWithForm/PageWithForm';
import BaseInput from '../../components/AuthorizationInputs/BaseInput';
import PasswordInput from '../../components/AuthorizationInputs/PasswordInput';

function Register() {
  const registerHints = [
    {
      text: 'Уже зарегистрированы? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  return (
    <PageWithForm heading='Регистрация' buttonText='Зарегистрироваться' hints={registerHints}>
      <BaseInput type='text' placeholder='Имя' margin={'mb-6'} />
      <BaseInput type='email' placeholder='E-mail' margin={'mb-6'} />
      <PasswordInput />
    </PageWithForm>
  )
}

export default Register;