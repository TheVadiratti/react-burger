import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { closeModalAction } from '../../services/actions/modal';
import Loader from '../Loader/Loader';

const modalRoot = document.querySelector('#react-modals');

function Modal({ children, prePage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const pageView = useSelector((state) => state.modal.pageView);
  const modalType = useSelector((state) => state.modal.type);
  const sendOrderRequest = useSelector((state) => state.order.isLoaded);

  useEffect(() => {
    function closePopupEsc(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown', closePopupEsc);
    return () => {
      document.removeEventListener('keydown', closePopupEsc);
    }
  }, [sendOrderRequest]);

  const isPageType = pageView.ingredient && pageView.order && pageView.myOrder && modalType !== 'OrderDetails';

  function closeModal() {
    dispatch(closeModalAction());
    history.replace({ pathname: `${prePage}` });
  }


  return ReactDOM.createPortal(
    (
      <ModalOverlay prePage={prePage}>
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

Modal.propTypes = {
  heading: PropTypes.string,
  prePage: PropTypes.string.isRequired
}; 