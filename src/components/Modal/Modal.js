import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#react-modals');

function Modal(props) {
  function closePopup() {
    props.setOnPopup({
      open: false,
      type: ''
    })
  }

  React.useEffect(() => {
    function closePopupEsc(e) {
      if (e.code === 'Escape') {
        closePopup();
      }
    }
    document.addEventListener('keydown', closePopupEsc);
    return () => {
      document.removeEventListener('keydown', closePopupEsc);
    }
  }, []);

  return ReactDOM.createPortal(
    (
      <ModalOverlay setOnPopup={props.setOnPopup}>
        <div className={modalStyles.window}>
          <div className={`mt-10 ${modalStyles.cnt}`}>
            <h2 className="text text_type_main-large">{props.heading}</h2>
            <div onClick={closePopup} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>
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
  setOnPopup: PropTypes.func.isRequired,
  heading: PropTypes.string
}; 