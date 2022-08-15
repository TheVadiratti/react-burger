import ReactDOM from 'react-dom';
import modalOverlayStyle from './ModalOverlay.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {
  function closePopup() {
    props.setOnPopup({
      open: false,
      type: ''
    })
  }

  return ReactDOM.createPortal(
    (
      <div className={modalOverlayStyle.overlay}>
        <div className={modalOverlayStyle.window}>
          <div className={`mt-10 ${modalOverlayStyle.cnt}`}>
            <h2 className="text text_type_main-large">{props.onHeading && ('Детали ингредиента')}</h2>
            <div onClick={closePopup} className={modalOverlayStyle.closeIcon}><CloseIcon type='primary' /></div>
          </div>
          {props.children}
        </div>
      </div>
    ), 
    modalRoot
  );
}

export default ModalOverlay;