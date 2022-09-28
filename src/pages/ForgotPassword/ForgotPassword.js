import PageWithForm from '../../components/PageWithForm/PageWithForm';
import BaseInput from '../../components/AuthorizationInputs/BaseInput';
import PasswordInput from '../../components/AuthorizationInputs/PasswordInput';

function ForgotPassword() {
  const forgotPasswordHints = [
    {
      text: 'Вспомнили пароль? ',
      link: 'Войти',
      route: '/login'
    }
  ]

  return (
    <PageWithForm heading='Ввостановление пароля' buttonText='Сохранить' hints={forgotPasswordHints}>
      <PasswordInput placeholder={'Введите новый пароль'} />
      <BaseInput type='text' placeholder='Введите код из письма' margin={'mb-6'} />
    </PageWithForm>
  )
}

export default ForgotPassword;