import ReactDOM from 'react-dom';
import modalOverlayStyle from './ModalOverlay.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {
  return ReactDOM.createPortal(
    (
      <div className={modalOverlayStyle.overlay}>
        <div className={modalOverlayStyle.window}>
          <div className={modalOverlayStyle.icon}><CloseIcon type='primary' /></div>
          {props.children}
        </div>
      </div>
    ), 
    modalRoot
  );
}

export default ModalOverlay;