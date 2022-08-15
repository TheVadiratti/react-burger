import ReactDOM from 'react-dom';
import modalOverlayStyle from './ModalOverlay.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {
  return ReactDOM.createPortal(
    (
      <div className={modalOverlayStyle.overlay}>
        <div className={`pt-10 pb-30 ${modalOverlayStyle.window}`}>
          <div className={modalOverlayStyle.cnt}>
            <p2 className="pt-8 text text_type_main-large"></p2>
            <div className={modalOverlayStyle.closeIcon}><CloseIcon type='primary' /></div>
          </div>
          <span className='pt-7 text text_type_digits-large'>034563</span>
          <span className='text text_type_main-medium mt-9'>идентификатор заказа</span>
          <div className={`mt-15 ${modalOverlayStyle.doneIcon}`}></div>
          <span className='text text_type_main-default mt-15'>Ваш заказ начали готовить</span>
          <span className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
          {props.children}
        </div>
      </div>
    ), 
    modalRoot
  );
}

export default ModalOverlay;