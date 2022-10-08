import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { closeModalAction } from '../../services/actions/actions';

const modalRoot = document.querySelector('#react-modals');

function Modal(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function closeModal() {
    dispatch(closeModalAction());
    history.replace({pathname: '/'});
  }

  React.useEffect(() => {
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

  return ReactDOM.createPortal(
    (
      <ModalOverlay >
        <div className={modalStyles.window}>
          <div className={`mt-10 ${modalStyles.cnt}`}>
            <h2 className="text text_type_main-large">{props.heading}</h2>
            <div onClick={closeModal} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    ),
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  heading: PropTypes.string
}; 