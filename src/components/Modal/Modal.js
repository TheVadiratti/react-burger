import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#react-modals');

function Modal(props) {
  function closePopup() {
    props.setOnPopup({
      open: false,
      type: ''
    })
  }

  function closePopupOverlay(e) {
    if(e.target.getAttribute('id') === 'overlay') {
      closePopup();
    }
  }

  React.useEffect(() => {
    function closePopupEsc(e) {
      if(e.code === 'Escape') {
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
      <ModalOverlay>
        <div id='overlay' className={modalStyles.overlay} onClick={closePopupOverlay}>
          <div className={modalStyles.window}>
            <div className={`mt-10 ${modalStyles.cnt}`}>
              <h2 className="text text_type_main-large">{props.onHeading && ('Детали ингредиента')}</h2>
              <div onClick={closePopup} className={modalStyles.closeIcon}><CloseIcon type='primary' /></div>
            </div>
            {props.children}
          </div>
        </div>
      </ModalOverlay>
    ), 
    modalRoot
  );
}

export default Modal;