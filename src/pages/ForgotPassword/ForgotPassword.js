import PageWithForm from '../../components/PageWithForm/PageWithForm';
import BaseInput from '../../components/AuthorizationInputs/BaseInput';

function ForgotPassword() {
  const forgotPasswordHints = [
    {
      text: 'Вспомнили пароль? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  return (
    <PageWithForm heading='Восстановление пароля' buttonText='Восстановить' hints={forgotPasswordHints}>
      <BaseInput type='email' placeholder='Укажите e-mail' margin={'mb-6'} />
    </PageWithForm>
  )
}

export default ForgotPassword;