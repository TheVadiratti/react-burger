import ReactDOM from 'react-dom';
import modalOverlayStyle from './ModalOverlay.module.css';

const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {
  return ReactDOM.createPortal(
    (
      <div className={modalOverlayStyle.overlay}>
        {props.children}
      </div>
    ), 
    modalRoot
  );
}

export default ModalOverlay;