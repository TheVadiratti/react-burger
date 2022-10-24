import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { closeModalAction } from '../../services/actions/modal';

const modalRoot = document.querySelector('#react-modals');

function Modal({ children, prePage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const byClick = useSelector((state) => state.modal.byClick);

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
  }, []);

  function closeModal() {
    dispatch(closeModalAction());
    history.replace({ pathname: `${prePage}` });
  }

  return ReactDOM.createPortal(
    (
      <ModalOverlay prePage={prePage}>
        <div className={`${modalStyles.window} ${!byClick && modalStyles.windowTypeGeneral}`}>
          {byClick && <div onClick={closeModal} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>}
          {children}
        </div>
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