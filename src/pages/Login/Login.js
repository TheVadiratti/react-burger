import PageWithForm from '../../components/PageWithForm/PageWithForm';
import BaseInput from '../../components/AuthorizationInputs/BaseInput';
import PasswordInput from '../../components/AuthorizationInputs/PasswordInput';

function Login() {
  const loginHints = [
    {
      text: 'Вы — новый пользователь? ',
      link: 'Зарегистрироваться',
      route: '/register'
    },
    {
      text: 'Забыли пароль? ',
      link: 'Восстановить пароль',
      route: '/forgot-password'
    }
  ]

  return (
    <PageWithForm heading='Вход' buttonText='Войти' hints={loginHints}>
      <BaseInput type='email' placeholder='E-mail' />
      <PasswordInput />
    </PageWithForm>
  )
}

export default Login;