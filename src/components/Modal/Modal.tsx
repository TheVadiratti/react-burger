import { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Loader from '../Loader/Loader';

const modalRoot = document.getElementById('react-modals') as HTMLElement;

type TProps = {
  children: ReactNode;
  isPageType: boolean;
};

function Modal({ children, isPageType }: TProps) {
  const history = useHistory();
  const sendOrderRequest = useSelector((state) => state.order.isLoading);

  useEffect(() => {
    document.addEventListener('keydown', closePopupEsc);
    return () => {
      document.removeEventListener('keydown', closePopupEsc);
    }
  }, [sendOrderRequest]);

  function closePopupEsc(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }
  
  function closeModal() {
    history.goBack();
  }

  return ReactDOM.createPortal(
    (
      <ModalOverlay isPageType={isPageType} closeModal={closeModal}>
        {!sendOrderRequest ?
        <div className={`${modalStyles.window} ${isPageType && modalStyles.windowTypeGeneral}`}>
          {!isPageType && <div onClick={closeModal} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>}
          {children}
        </div>
        :
        <Loader />}
      </ModalOverlay>
    ),
    modalRoot
  );
}

export default Modal;